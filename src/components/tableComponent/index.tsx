import TableHeader from "./table-header";
import TableMain from "./table-main";
import Tab from "../tab";
import type { ExpensesDataType } from "../../constants/types";

function Table({ data }: { data: ExpensesDataType[] }) {
  return (
    <Tab px={false}>
      <TableHeader />
      <TableMain data={data} />
    </Tab>
  );
}

export default Table;
