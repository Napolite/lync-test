import { X } from "lucide-react";

import Select from "../select";
import type { SetStateAction } from "react";

function AddExpenses({
  closeModal,
}: {
  closeModal: () => SetStateAction<any>;
}) {
  return (
    <div className="fixed w-full min-h-full bg-[#00000080] top-0 left-0 flex items-center justify-center overflow-auto">
      <div className="bg-[white] w-[500px] min-h-[500px] px-[23px] py-[20px] rounded-[20px]">
        <div className="flex justify-between items-start">
          <div className="mb-[20px]">
            <p className="text-[18px] font-semibold">Add New Expenses</p>
            <p className="text-[14px] text-[#00000080]">
              Enter the details of your new expense
            </p>
          </div>
          <div>
            <X onClick={closeModal} />
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <div className="flex flex-col gap-y-[5px]">
            <label className="">Amount</label>
            <input
              type="number"
              className="w-full h-[50px] bg-[rgba(128,128,128,0.2)] rounded-[10px] px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <label className="">Category</label>
            <Select
              options={[
                "Food",
                "Transportation",
                "Entertainment",
                "Shopping",
                "Utilities",
                "Health",
                "Housing",
                "Travel",
                "Other",
              ]}
            />
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <label className="">Description</label>
            <textarea className="w-full h-[75px] bg-[rgba(128,128,128,0.2)] rounded-[10px] px-[10px] py-[10px]" />
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <label className="">Date</label>
            <input
              aria-label="Date"
              type="date"
              className="w-full h-[50px] bg-[rgba(128,128,128,0.2)] rounded-[10px] px-[10px]"
            />
          </div>
        </div>
        <div className="flex justify-end gap-x-[20px] mt-[30px]">
          <button className="px-[10px] py-[8px] rounded-[10px] bg-[#ffffff] ring">
            Cancel
          </button>
          <button className="px-[10px] py-[8px] rounded-[10px] bg-[#000000] text-[#ffffff]">
            Add Expenses
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpenses;
