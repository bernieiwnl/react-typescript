import React, { useState } from "react";
import "../../css/ExpenseForm.css";

type InputExpense = {
  title: string;
  amount: number;
  date: Date;
};

const ExpenseForm = () => {
  const [enteredExpense, setEnteredExpense] = useState<InputExpense>({
    title: "",
    amount: 0,
    date: new Date(),
  });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredExpense((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredExpense((prevState) => ({
      ...prevState,
      amount: event.target.valueAsNumber,
    }));
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredExpense((prevState) => ({
      ...prevState,
      date: new Date(event.target.value),
    }));
  };

  console.log(enteredExpense);

  return (
    <>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
