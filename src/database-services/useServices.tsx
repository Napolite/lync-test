import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./services";

function useServices() {
  //added this line for clarity
  const getExpenses = () => {
    const data = useLiveQuery(() => db?.expenses?.toArray());
    if (data) return data;
    else return null;
  };

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

  return { addExpenses, getExpenses };
}

export default useServices;
