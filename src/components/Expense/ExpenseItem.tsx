import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../../css/ExpenseItem.css";

interface Props {
  keyId: string;
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = (props: Props) => {
  const { keyId, date, title, amount } = props;

  const buttonClickHandler = () => {
    alert(`You click ${keyId}`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={buttonClickHandler} className="expense-item__price">
          Button
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
