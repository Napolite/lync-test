import Dexie, { type EntityTable } from "dexie";

interface Expenses {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

class MySubClassedDexie extends Dexie {
  expenses!: EntityTable<Expenses, "id">;
  budget!: EntityTable<{ id: number; amount: number }, "id">;

  constructor() {
    super("Expenses");
    this.version(1).stores({
      expenses: "++id, date, description, category, amount",
      budget: "id",
    });
  }
}

export const db = new MySubClassedDexie();
