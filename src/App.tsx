import { useState } from "react";
import "./App.css";
import AddExpenses from "./components/addExpenses";
import Header from "./components/header";
import Dashboard from "./screens/dashboard";

function App() {
  const [openAddExpenseModal, setopenAddExpenseModal] =
    useState<boolean>(false);
  return (
    <div className="w-full h-auto pb-[20px]">
      <div className="w-[70%] mx-auto ">
        <Header openModal={() => setopenAddExpenseModal(true)} />
      </div>
      <Dashboard />
      {openAddExpenseModal && (
        <AddExpenses closeModal={() => setopenAddExpenseModal(false)} />
      )}
    </div>
  );
}

export default App;
