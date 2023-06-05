import { useState } from "react";
import ExpenseFilter from "../Filter/ExpenseFilter";
import { Expense } from "../Utils/Type";
import ExpenseList from "./ExpenseList";
import Card from "../Ui/Card";
import "../../css/Expenses.css";
import ExpenseChart from "./ExpenseChart";

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
        <ExpenseChart items={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </>
  );
};

export default Expenses;
