import React, { useState } from "react";
import "../../css/ExpenseForm.css";
import { Expense } from "../utils/ExpenseType";

interface Props {
  onSaveExpenseData: (childEnteredExpenseData: Expense) => void;
  onCancelExpenseForm: () => void;
}

const ExpenseForm = ({ onSaveExpenseData, onCancelExpenseForm }: Props) => {
  const [enteredExpense, setEnteredExpense] = useState<Expense>({
    id: "",
    title: "",
    amount: 0,
    date: new Date(),
  });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredExpense((prevState) => ({
      // function form, jika ingin update data tetapi bergantung dengan state sebelumnya maka gunakan function form state, karena akan mengambil data state paling terakhir
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

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newExpenseData: Expense = {
      id: "",
      title: enteredExpense.title,
      amount: enteredExpense.amount,
      date: enteredExpense.date,
    };
    //passing data from child components to parent components newExpense.tsx component
    onSaveExpenseData(newExpenseData);
    //reset form fields
    setEnteredExpense({
      id: "",
      title: "",
      amount: 0,
      date: new Date(),
    });
  };

  const cancelFormHandler = () => {
    onCancelExpenseForm();
  };

  // adding value properties on all input fields = two way binding.
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredExpense.title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredExpense.amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2023-12-31"
              value={enteredExpense.date.toISOString().substring(0, 10)}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelFormHandler}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
