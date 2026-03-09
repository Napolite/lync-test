import { useState } from "react";
import "./App.css";
import AddExpenses from "./components/addExpenses";
import Header from "./components/header";
import Dashboard from "./screens/dashboard";
import useServices from "./database-services/useServices";

function App() {
  const { updateBudget, budget } = useServices();

  const [openAddExpenseModal, setopenAddExpenseModal] =
    useState<boolean>(false);
  const [openBudget, setOpenBudget] = useState<boolean>(false);

  const [nBudget, setBudget] = useState<number | null | undefined>(
    budget?.amount,
  );

  return (
    <div className="w-full h-auto pb-[20px]">
      <div className="w-[70%] mx-auto ">
        <Header
          openModal={() => setopenAddExpenseModal(true)}
          openBudget={() => setOpenBudget(!openBudget)}
        />
      </div>
      {openBudget && (
        <div className="w-[70%] mx-auto flex justify-end items-center gap-x-[5px]">
          <input
            type="number"
            className="w-[220px] h-[30px] bg-[rgba(128,128,128,0.2)] rounded-[5px] px-[10px]"
            onChange={(e) => {
              setBudget(Number(e.target.value));
            }}
            value={(nBudget as number) || undefined}
          />
          <button
            className="h-[30px] bg-[#000000] rounded-[8px] flex items-center justify-between px-[15px] text-[#ffffff]"
            onClick={() => {
              updateBudget((nBudget as number) || 0).then(() => {
                setOpenBudget(false);
              });
            }}
            disabled={!nBudget}
            style={{ background: !nBudget ? "gray" : "#000000" }}
          >
            Set budget
          </button>
        </div>
      )}
      <Dashboard />
      {openAddExpenseModal && (
        <AddExpenses closeModal={() => setopenAddExpenseModal(false)} />
      )}
    </div>
  );
}

export default App;
