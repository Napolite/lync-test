import { CATEGORY_COLORS } from "../constants/constants";
import type { ExpensesDataType } from "../constants/types";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const addColorToData = (
  data: ExpensesDataType[],
): (ExpensesDataType & { catColor: string })[] => {
  const newData = data.map((d: ExpensesDataType) => {
    return {
      ...d,
      catColor: CATEGORY_COLORS[d?.category],
      data: formatDate(d?.date),
    };
  });

  return newData;
};

export const composeDataForGraph = (data: ExpensesDataType[]) => {
  if (!data || data.length === 0) return [];

  const categories = [
    "Food",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Utilities",
    "Health",
  ];

  const uniqueMonths = [
    ...new Set(
      data.map((d) => {
        const date = new Date(d.date);

        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      }),
    ),
  ].sort();

  const monthlyData = uniqueMonths.map((month) => {
    const entry: any = {
      name: month,
      amount: 0,
    };

    categories.forEach((cat) => (entry[cat.toLowerCase()] = 0));

    const monthExpenses = data.filter((d) => d.date.startsWith(month));

    monthExpenses.forEach((item) => {
      const key = item.category.toLowerCase();
      if (entry.hasOwnProperty(key)) {
        const value = item.amount || 0;
        entry[key] += value;
        entry.amount += value;
      }
    });

    entry.displayName = new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(month + "-01"));

    return entry;
  });

  return monthlyData;
};
