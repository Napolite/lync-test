import { Edit, Trash2 } from "lucide-react";
import type { ExpensesDataType } from "../../constants/types";
import { Badge } from "../recentExpenses";
import { CATEGORY_COLORS } from "../../constants/constants";
import { formatDate } from "../../helpers/composeDate";
import useServices from "../../database-services/useServices";
import AddExpenses from "../addExpenses";
import { useState } from "react";

function Row({ data }: { data: ExpensesDataType }) {
  const { deleteExpenses } = useServices();
  const [openAddExpenses, setOpenAddExpenses] = useState<boolean>(false);
  return (
    <div className="text-[16px] font-600 flex w-full justify-between py-[10px] border-t-[1px] border-t-[#00000030] border-t-solid px-[10px]">
      <div className="flex-1">{formatDate(data?.date)}</div>
      <div className="flex-1">
        {data?.description?.length > 25
          ? data?.description?.slice(0, 25) + "..."
          : data?.description}
      </div>
      <div className="flex-1">
        <div className="w-fit">
          <Badge
            color={CATEGORY_COLORS[data?.category]}
            text={data?.category}
          />
        </div>
      </div>
      <div className="flex-1">${data?.amount}</div>
      <div className="flex flex-1 gap-x-[10px] items-center justify-end">
        <button className="px-[10px] py-[6px] rounded-[8px] ring ring-1 ring-[#00000040]">
          <Edit size={18} onClick={() => setOpenAddExpenses(true)} />
        </button>
        <button className="px-[10px] py-[6px] rounded-[8px] ring ring-1 ring-[#00000040]">
          <Trash2 size={18} onClick={() => deleteExpenses(data?.id)} />
        </button>
      </div>
      {openAddExpenses && (
        <AddExpenses
          closeModal={function () {
            setOpenAddExpenses(false);
          }}
          isEdit={true}
          data={data}
        />
      )}
    </div>
  );
}

export default Row;
