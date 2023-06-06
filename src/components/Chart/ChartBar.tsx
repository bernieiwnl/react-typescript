import "../../css/ChartBar.css";

interface Props {
  label: string;
  value: number;
  maxValue: number;
}

const ChartBar = ({ label, value, maxValue }: Props) => {
  let totalHeightofChart = "0%";

  if (maxValue > 0) {
    totalHeightofChart = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: totalHeightofChart }}
        ></div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
