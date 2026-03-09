import Tab from "../components/tab";
import { Calendar, DollarSign, Search } from "lucide-react";
import GraphComponent from "../components/graphComponent";
import RecentExpenses from "../components/recentExpenses";
import Table from "../components/tableComponent";
import Select from "../components/select";
import { useState } from "react";
import useServices from "../database-services/useServices";
import type { ExpensesDataType } from "../constants/types";

function Dashboard() {
  const { expensesData, totalExpenses } = useServices();
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  return (
    <div className="w-[70%] mx-auto min-h-[100vh]">
      <div className="flex w-full justify-between gap-x-[40px] mt-[40px]">
        <Tab>
          <div className="w-full flex justify-between mb-[25px] ">
            <p>Total Expenses</p>
            <DollarSign size={18} />
          </div>
          <div>
            <p className="text-[24px]">${totalExpenses}</p>
            <p className="text-[12px]">
              Across {expensesData?.length} transactions
            </p>
          </div>
        </Tab>
        <Tab>
          <div className="w-full flex justify-between mb-[25px]">
            <p>This month</p>
            <Calendar size={18} />
          </div>
          <div>
            <p className="text-[24px]">$0.00</p>
            <p className="text-[12px]">0 transactions this month</p>
          </div>
        </Tab>
        <Tab>
          <div className="w-full flex justify-between mb-[25px]">
            <p>Average Expenses</p>
            <DollarSign size={18} />
          </div>
          <div>
            <p className="text-[24px]">
              ${((totalExpenses || 1) / (expensesData?.length || 1)).toFixed(2)}
            </p>
            <p className="text-[12px]">Per transactions</p>
          </div>
        </Tab>
      </div>
      <div className="flex gap-x-[20px] mt-[40px]">
        <Tab>
          <div>
            <div>
              <p className="text-[18px]">Monthly Spending Distribution</p>
              <p className="text-[14px] text-[#00000070]">
                Percentage breakdown by category each month
              </p>
            </div>
            <GraphComponent />
          </div>
        </Tab>
        <Tab>
          <div>
            <RecentExpenses data={expensesData?.slice(0, 5) || []} />
          </div>
        </Tab>
      </div>
      <div className="mt-[40px]">
        <Tab>
          <div className="mb-[20px]">
            <p className="text-[18px] font-semibold">All Expenses</p>
            <p className="text-[14px] text-[#00000080]">
              Manage and view all your expenses
            </p>
          </div>
          <div className="flex gap-x-[20px] mb-[20px]">
            <div className="flex flex-1 w-[80%] items-center py-[5px] bg-[rgba(128,128,128,0.2)] rounded-[5px] gap-x-[5px] px-[10px]">
              <Search size={14} />
              <input
                type="text"
                className="w-[80%] outline-none"
                placeholder="Search expenses..."
                onChange={(e) => {
                  setQuery(e?.target?.value);
                }}
              />
            </div>
            <div className="w-[20%]">
              <Select
                options={[
                  "All Categories",
                  "Food",
                  "Transportation",
                  "Entertainment",
                  "Shopping",
                  "Utilities",
                  "Health",
                ]}
                onSelect={(val) =>
                  val === "All Categories" ? setFilter("") : setFilter(val)
                }
              />
            </div>
          </div>
          <Table
            data={
              expensesData
                ?.filter((data) => (filter ? data?.category === filter : data))
                .filter((data) =>
                  query
                    ? data?.description
                        ?.toLowerCase()
                        ?.includes(query?.toLowerCase())
                    : data,
                ) as ExpensesDataType[]
            }
          />
        </Tab>
      </div>
    </div>
  );
}

export default Dashboard;
