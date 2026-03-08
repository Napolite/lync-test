import React from "react";
import TableHeader from "./table-header";
import TableMain from "./table-main";
import Tab from "../tab";

function Table() {
  return (
    <Tab px={false}>
      <TableHeader />
      <TableMain />
    </Tab>
  );
}

export default Table;
