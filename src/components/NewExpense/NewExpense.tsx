import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../../css/NewExpense.css";

type InputExpense = {
  title: string;
  amount: number;
  date: Date;
};

const NewExpense = () => {
  const saveExpenseHandler = (enteredExpenseData: InputExpense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
      </div>
    </>
  );
};

export default NewExpense;
