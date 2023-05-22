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

  const content =
    filteredExpense.length > 0 ? (
      filteredExpense.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))
    ) : (
      <p>No expenses data found</p>
    );

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onSelectYear={onSelectYearHandler}
        />
        {content}
      </Card>
    </>
  );
};

export default Expenses;
