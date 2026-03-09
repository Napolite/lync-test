import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./services";

function useServices() {
  const expensesData = useLiveQuery(() => db?.expenses?.toArray());
  const totalExpenses = useLiveQuery(() =>
    db?.expenses?.toArray()?.then((data) =>
      data
        .map((d) => d?.amount)
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0),
    ),
  );

  const totalMonthlyExpenses = useLiveQuery(() =>
    db?.expenses?.toArray()?.then((data) =>
      data
        ?.filter((d) => {
          return new Date(d?.date)?.getMonth() === new Date()?.getMonth();
        })
        .map((d) => d?.amount)
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0),
    ),
  );

  const totalMonthlyExpensesQ = useLiveQuery(() =>
    db?.expenses?.toArray()?.then((data) =>
      data?.filter((d) => {
        return new Date(d?.date)?.getMonth() === new Date()?.getMonth();
      }),
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
    return id;
  };

  const deleteExpenses = async (id: number) => {
    db.expenses.delete(id);
  };

  return {
    addExpenses,
    expensesData,
    totalExpenses,
    deleteExpenses,
    totalMonthlyExpenses,
    totalMonthlyExpensesQ,
  };
}

export default useServices;
