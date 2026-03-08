import React from "react";
import Header from "../components/header";
import Tab from "../components/tab";
import { Calendar, DollarSign } from "lucide-react";
import GraphComponent from "../components/graphComponent";
import RecentExpenses from "../components/recentExpenses";
import Table from "../components/tableComponent";

function Dashboard() {
  return (
    <div className="w-[70%] mx-auto min-h-[100vh]">
      <Header />
      <div className="flex w-full justify-between gap-x-[40px] mt-[40px]">
        <Tab>
          <div className="w-full flex justify-between mb-[25px] ">
            <p>Total Expenses</p>
            <DollarSign size={18} />
          </div>
          <div>
            <p className="text-[24px]">$1168.73</p>
            <p className="text-[12px]">Across 14 transactions</p>
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
            <p className="text-[24px]">$83.48</p>
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
            <RecentExpenses />
          </div>
        </Tab>
      </div>
      <Table />
    </div>
  );
}

export default Dashboard;
