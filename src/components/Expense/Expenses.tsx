import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../../css/Expenses.css";

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface Expenses {
  expenses: Expense[];
}

const Expenses = (props: Expenses) => {
  const { expenses } = props;
  const [enteredYear, setEnteredYear] = useState("2019");
  const onSelectYearHandler = (year: string) => {
    setEnteredYear(year);
  };

  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(enteredYear)
  );

  console.log(filteredExpense);

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onSelectYear={onSelectYearHandler}
        />
        {filteredExpense.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
