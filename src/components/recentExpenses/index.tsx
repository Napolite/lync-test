import type { ExpensesDataType } from "../../constants/types";
import { addColorToData } from "../../helpers/composeDate";
import Tab from "../tab";

const Badge = ({ color, text }: { color: string; text: string }) => {
  return (
    <div
      style={{ background: `${color}10`, color: color }}
      className="px-[10px] py-[2px] text-[12px] rounded-[8px] font-bold"
    >
      {text}
    </div>
  );
};

function RecentExpenses({ data }: { data: ExpensesDataType[] }) {
  return (
    <div>
      <div className="mb-[20px]">
        <h5 className="text-[16px] font-bold">Recent Expenses</h5>
        <h1 className="text-[12px]">Your latest transactions</h1>
      </div>
      <div className="gap-y-[10px] flex flex-col">
        {addColorToData(data)?.map(
          (data: ExpensesDataType & { catColor: string }) => (
            <Tab>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-x-[5px]">
                    <Badge color={data?.catColor} text={data?.category} />
                    <p className="text-[12px]">{data?.date}</p>
                  </div>
                  <p className="text-[16px]">{data?.description}</p>
                </div>
                <p className="text-[20px]">${data?.amount}</p>
              </div>
            </Tab>
          ),
        )}
      </div>
    </div>
  );
}

export default RecentExpenses;
