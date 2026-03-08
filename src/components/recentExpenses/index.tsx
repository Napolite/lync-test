import Tab from "../tab";

const Badge = ({ color, text }: { color: string; text: string }) => {
  return (
    <div
      style={{ background: `${color}40`, color: color }}
      className="px-[10px] py-[2px] text-[12px] rounded-[8px]"
    >
      {text}
    </div>
  );
};

function RecentExpenses() {
  return (
    <div>
      <div className="mb-[20px]">
        <h5 className="text-[16px] font-bold">Recent Expenses</h5>
        <h1 className="text-[12px]">Your latest transactions</h1>
      </div>
      <div className="gap-y-[10px] flex flex-col">
        <Tab>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-x-[5px]">
                <Badge color="#ff0000" text={"Food"} />
                <p className="text-[12px]">Jan 27, 2025</p>
              </div>
              <p className="text-[16px]">Lunch at restaurant</p>
            </div>
            <p className="text-[20px]">$45.50</p>
          </div>
        </Tab>
        <Tab>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-x-[5px]">
                <Badge color="#ff0000" text={"Food"} />
                <p className="text-[12px]">Jan 27, 2025</p>
              </div>
              <p className="text-[16px]">Lunch at restaurant</p>
            </div>
            <p className="text-[20px]">$45.50</p>
          </div>
        </Tab>
        <Tab>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-x-[5px]">
                <Badge color="#ff0000" text={"Food"} />
                <p className="text-[12px]">Jan 27, 2025</p>
              </div>
              <p className="text-[16px]">Lunch at restaurant</p>
            </div>
            <p className="text-[20px]">$45.50</p>
          </div>
        </Tab>
        <Tab>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-x-[5px]">
                <Badge color="#ff0000" text={"Food"} />
                <p className="text-[12px]">Jan 27, 2025</p>
              </div>
              <p className="text-[16px]">Lunch at restaurant</p>
            </div>
            <p className="text-[20px]">$45.50</p>
          </div>
        </Tab>
        <Tab>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-x-[5px]">
                <Badge color="#ff0000" text={"Food"} />
                <p className="text-[12px]">Jan 27, 2025</p>
              </div>
              <p className="text-[16px]">Lunch at restaurant</p>
            </div>
            <p className="text-[20px]">$45.50</p>
          </div>
        </Tab>
      </div>
    </div>
  );
}

export default RecentExpenses;
