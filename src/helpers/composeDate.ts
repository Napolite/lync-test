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

  // 1. Extract unique "YYYY-MM" strings from the dates
  const uniqueMonths = [
    ...new Set(
      data.map((d) => {
        const date = new Date(d.date);
        // Returns format "2023-05"
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      }),
    ),
  ].sort();

  // 2. Map through each month and sum totals
  const monthlyData = uniqueMonths.map((month) => {
    const entry: any = {
      name: month, // The X-Axis label
      amount: 0,
    };

    // Initialize categories
    categories.forEach((cat) => (entry[cat.toLowerCase()] = 0));

    // 3. Filter data belonging to this specific Year-Month
    const monthExpenses = data.filter((d) => d.date.startsWith(month));

    monthExpenses.forEach((item) => {
      const key = item.category.toLowerCase();
      if (entry.hasOwnProperty(key)) {
        const value = item.amount || 0;
        entry[key] += value;
        entry.amount += value;
      }
    });

    // Optional: Format "2023-05" to "May 2023" for better UI
    entry.displayName = new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(month + "-01")); // Add -01 to make it a valid date string

    return entry;
  });

  return monthlyData;
};
