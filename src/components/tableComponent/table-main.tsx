import type { ExpensesDataType } from "../../constants/types";
import Row from "./row";

function TableMain({ data }: { data: ExpensesDataType[] }) {
  return (
    <div>
      {data?.map((d) => (
        <Row data={d} />
      ))}
    </div>
  );
}

export default TableMain;
