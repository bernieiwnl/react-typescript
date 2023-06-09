import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../../css/ExpenseItem.css";

interface Props {
  date: Date;
  title: string;
  amount?: number;
}

const ExpenseItem = (props: Props) => {
  const { title, date, amount } = props;

  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
