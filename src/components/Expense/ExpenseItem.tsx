import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "../../css/ExpenseItem.css";

interface Props {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = (props: Props) => {
  const { date, amount } = props;

  const [title, setTitle] = useState(props.title);

  const buttonClickHandler = () => {
    setTitle("Updated Title");
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
