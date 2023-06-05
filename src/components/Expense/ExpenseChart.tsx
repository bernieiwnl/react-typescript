import Chart from "../Chart/Chart";
import { Expense, ChartData } from "../Utils/Type";

interface Props {
  items: Expense[];
}

const ExpenseChart = ({ items }: Props) => {
  const ARRAY_OF_CHART: ChartData[] = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Des",
      value: 0,
    },
  ];

  items.forEach((item) => {
    const getMonth = item.date.getMonth();
    ARRAY_OF_CHART[getMonth].value += item.amount;
  });

  return (
    <div>
      <Chart dataPointsOfChart={ARRAY_OF_CHART} />
    </div>
  );
};

export default ExpenseChart;
