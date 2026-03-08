import { Edit, Trash2 } from "lucide-react";

function Row() {
  return (
    <div className="text-[16px] font-600 flex w-full justify-between py-[10px] border-t-[1px] border-t-[#00000030] border-t-solid px-[10px]">
      <div className="flex-1">Jan 27, 2025</div>
      <div className="flex-1">Lunch at restaurant</div>
      <div className="flex-1">Food</div>
      <div className="flex-1">$45.50</div>
      <div className="flex flex-1 gap-x-[10px] items-center justify-end">
        <button className="px-[10px] py-[6px] rounded-[8px] ring ring-1 ring-[#00000040]">
          <Edit size={18} />
        </button>
        <button className="px-[10px] py-[6px] rounded-[8px] ring ring-1 ring-[#00000040]">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default Row;
