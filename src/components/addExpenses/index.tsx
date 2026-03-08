import { X } from "lucide-react";
import React from "react";
import Select from "../select";

function AddExpenses() {
  return (
    <div className="fixed w-full h-full bg-[#00000080] top-0 left-0 overflow-hidden">
      <div>
        <div className="flex justify-between items-start">
          <div className="mb-[20px]">
            <p className="text-[18px] font-semibold">Add New Expenses</p>
            <p className="text-[14px] text-[#00000080]">
              Enter the details of your new expense
            </p>
          </div>
          <div>
            <X />
          </div>
        </div>
        <div>
          <div>
            <label>Amount</label>
            <input type="number" />
          </div>
          <div>
            <label>Category</label>
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
          <div>
            <label>Description</label>
            <textarea />
          </div>
          <div>
            <label>Date</label>
            <input aria-label="Date" type="date" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpenses;
