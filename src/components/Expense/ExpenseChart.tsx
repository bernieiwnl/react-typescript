import Chart from "../Chart/Chart";
import { ARRAY_OF_CHART } from "../Utils/Data";
import { Expense } from "../Utils/Type";

interface Props {
  items: Expense[];
}

const ExpenseChart = ({ items }: Props) => {
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
