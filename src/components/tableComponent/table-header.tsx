import React from "react";

function TableHeader() {
  return (
    <div className="text-[16px] font-600 flex w-full justify-between">
      <div>Date</div>
      <div>Description</div>
      <div>Category</div>
      <div>Amount</div>
      <div>Actions</div>
    </div>
  );
}

export default TableHeader;
