import React from "react";

function TableHeader() {
  return (
    <div className="text-[16px] font-600 flex w-full justify-between items-center px-[10px]">
      <div className="flex-1">Date</div>
      <div className="flex-1">Description</div>
      <div className="flex-1">Category</div>
      <div className="flex-1 flex item-end ">Amount</div>
      <div className=" flex item-end flex-1 justify-end">Actions</div>
    </div>
  );
}

export default TableHeader;
