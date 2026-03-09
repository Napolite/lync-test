import { Plus } from "lucide-react";
import type { SetStateAction } from "react";

function Header({
  openModal,
  openBudget,
}: {
  openModal: () => SetStateAction<any>;
  openBudget: () => SetStateAction<any>;
}) {
  return (
    <div className="w-full justify-between flex justify-between pt-[20px]">
      <div className="">
        <p className="text-[24px] font-semibold">Expense Tracker</p>
        <p>Track and manage your financial expenses</p>
      </div>
      <div className="flex gap-x-[30px]">
        <button
          className="px-[10px] h-[40px] bg-[#ffffff] ring text-[#000000] rounded-[8px] flex items-center justify-between px-[15px]"
          onClick={openBudget}
        >
          <p className="text-[#000000]">Set Budget</p>
        </button>
        <button
          className="w-[157px] h-[40px] bg-[#000000] rounded-[8px] flex items-center justify-between px-[15px]"
          onClick={openModal}
        >
          <Plus color="#ffffff" size={18} />
          <p className="text-[#ffffff]">Add Expenses</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
