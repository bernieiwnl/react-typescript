import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { Expense } from "../utils/ExpenseType";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "../../css/Expenses.css";

interface Props {
  items: Expense[];
}

const Expenses = (props: Props) => {
  const { items } = props;
  const [enteredYear, setEnteredYear] = useState("2019");
  const onSelectYearHandler = (year: string) => {
    setEnteredYear(year);
  };

  const filteredExpense = items.filter(
    (expense) => expense.date.getFullYear() === parseInt(enteredYear)
  );

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onSelectYear={onSelectYearHandler}
        />
        <ExpenseList items={filteredExpense} />
      </Card>
    </>
  );
};

export default Expenses;
