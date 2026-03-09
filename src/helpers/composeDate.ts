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

  console.log("newData", newData);

  return newData;
};
