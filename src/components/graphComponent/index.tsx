import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import type { ExpensesDataType } from "../../constants/types";
import { composeDataForGraph } from "../../helpers/composeDate";
import { CATEGORY_COLORS } from "../../constants/constants";
// #region Sample data
// #endregion
const StackedBarChart = ({ data }: { data: ExpensesDataType[] }) => {
  console.log(composeDataForGraph(data), "daaaaaaaata it surrounds me");
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={composeDataForGraph(data)}
      margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" niceTicks="snap125" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Legend />
      {[
        "Food",
        "Transportation",
        "Entertainment",
        "Shopping",
        "Utilities",
        "Health",
      ].map((el: string) => (
        <Bar
          dataKey={el?.toLocaleLowerCase()}
          stackId="a"
          fill={CATEGORY_COLORS[el]}
          background
        />
      ))}
    </BarChart>
  );
};
export default StackedBarChart;
