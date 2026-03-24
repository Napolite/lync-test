import { X } from "lucide-react";

import Select from "../select";
import { useState, type SetStateAction } from "react";

import useServices from "../../database-services/useServices";
import type { ExpensesDataType } from "../../constants/types";

interface FormValueType {
  amount: number | null;
  category: string;
  description: string;
  date: string | any;
}

function AddExpenses({
  closeModal,
  isEdit = false,
  data,
}: {
  closeModal: () => SetStateAction<any>;
  isEdit?: boolean;
  data?: ExpensesDataType & { id: number | any };
}) {
  const { addExpenses, updateExpense } = useServices();

  const [hasErr, setHasErr] = useState<string[]>([]);

  const [formValues, setFormValues] = useState<FormValueType>({
    amount: data?.amount || null,
    category: data?.category || "Food",
    description: data?.description || "",
    date: data?.date || "",
  });
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
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  amount: Number(e.target.value),
                });
                setHasErr(hasErr?.filter((a) => a !== "amount"));
              }}
              value={formValues?.amount || undefined}
              min={0}
            />
            {hasErr?.includes("amount") && (
              <p className="text-[red]">Amount cannot be empty</p>
            )}
            {((formValues?.amount as number) || 0) < 0 && (
              <p className="text-[red]">Amount cannot be less than 0</p>
            )}
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
              onSelect={(value) => {
                setFormValues((prev) => ({ ...prev, category: value }));
              }}
              value={formValues?.category}
            />
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <label className="">Description</label>
            <textarea
              className="w-full h-[75px] bg-[rgba(128,128,128,0.2)] rounded-[10px] px-[10px] py-[10px]"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  description: e.target.value,
                });
                setHasErr(hasErr?.filter((a) => a !== "description"));
              }}
              value={formValues?.description}
            />
            {hasErr?.includes("description") && (
              <p className="text-[red]">Description cannot be empty</p>
            )}
          </div>
          <div className="flex flex-col gap-y-[5px]">
            <label className="">Date</label>
            <input
              aria-label="Date"
              type="date"
              className="w-full h-[50px] bg-[rgba(128,128,128,0.2)] rounded-[10px] px-[10px]"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  date: e.target.value,
                });
                setHasErr(hasErr?.filter((a) => a !== "date"));
              }}
              value={formValues?.date}
            />
            {hasErr?.includes("date") && (
              <p className="text-[red]">Date cannot be empty</p>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-x-[20px] mt-[30px]">
          <button
            className="px-[10px] py-[8px] rounded-[10px] bg-[#ffffff] ring"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-[10px] py-[8px] rounded-[10px] bg-[#000000] text-[#ffffff]"
            onClick={() => {
              const keys = Object.keys(formValues);
              const isEmpty = keys?.filter(
                (a) => !(formValues as FormValueType)[a as keyof FormValueType],
              );

              if (isEmpty?.length > 0) {
                setHasErr([...isEmpty]);
                return;
              }
              if (((formValues?.amount as number) || 0) < 0) return;
              isEdit
                ? updateExpense(data?.id, formValues)
                : addExpenses({
                    ...formValues,
                    amount: (formValues?.amount as number) || 0,
                  }).then(() => {
                    closeModal();
                  });
            }}
          >
            {!isEdit ? " Add Expenses" : "Edit Expense"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpenses;
