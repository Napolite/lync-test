import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./services";

function useServices() {
  const expensesData = useLiveQuery(() => db?.expenses?.toArray());
  const totalExpenses = useLiveQuery(() =>
    db?.expenses?.toArray()?.then((data) =>
      data
        ?.map((d) => d?.amount)
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0),
    ),
  );

  //added this line for clarity

  const addExpenses = async (data: {
    date: string;
    description: string;
    amount: number;
    category: string;
  }) => {
    const id = await db.expenses.add(data);
    console.log(data, "added data to expenses");
    return id;
  };

  const deleteExpenses = async (id: number) => {
    db.expenses.delete(id);
  };

  return { addExpenses, expensesData, totalExpenses, deleteExpenses };
}

export default useServices;
