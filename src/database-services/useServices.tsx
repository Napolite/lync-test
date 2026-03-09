import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./services";

function useServices() {
  const expensesData = useLiveQuery(() => db?.expenses?.toArray());

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

  return { addExpenses, expensesData };
}

export default useServices;
