import "../css/ExpenseDate.css";

interface Props {
  date: Date;
}

const ExpenseDate = (calendar: Props) => {
  const { date } = calendar;
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const day = date.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__date">{day}</div>
    </div>
  );
};

export default ExpenseDate;