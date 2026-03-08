import React from "react";

function Tab({ children }: any) {
  return (
    <div className="rounded-[10px] ring-1 ring-[#00000030] h-auto w-auto px-[20px] py-[15px] flex-1">
      {children}
    </div>
  );
}

export default Tab;
