import "../../css/Chart.css";
import { ChartData } from "../Utils/Type";
import ChartBar from "./ChartBar";

interface Props {
  dataPointsOfChart: ChartData[];
}
const Chart = ({ dataPointsOfChart }: Props) => {
  const dataPointsOfValues = dataPointsOfChart.map(
    (dataPoints) => dataPoints.value
  );

  const totalMaxValue = Math.max(...dataPointsOfValues);

  console.log(totalMaxValue);

  return (
    <div className="chart">
      {dataPointsOfChart.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          label={dataPoints.label}
          maxValue={totalMaxValue}
          value={dataPoints.value}
        />
      ))}
    </div>
  );
};

export default Chart;
