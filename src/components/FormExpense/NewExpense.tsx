import ExpenseForm from "./ExpenseForm";
import "../../css/NewExpense.css";
import { Expense } from "../Utils/Type";
import { useState } from "react";

interface Props {
  onAddExpense: (childExpensed: Expense) => void;
}

const NewExpense = ({ onAddExpense }: Props) => {
  const [currentForm, setCurrentForm] = useState(0);
  const saveExpenseHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // pass data from new expense component to parent (App component)
    onAddExpense(expenseData);
  };

  const setExpenseFormHandler = (cancelCurrentForm: number) => {
    setCurrentForm(cancelCurrentForm);
    console.log(cancelCurrentForm);
  };

  if (currentForm === 0) {
    return (
      <>
        <div className="new-expense">
          <button onClick={() => setCurrentForm(1)}>Add Expense</button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="new-expense">
        <ExpenseForm
          onCancelExpenseForm={setExpenseFormHandler}
          onSaveExpenseData={saveExpenseHandler}
        />
      </div>
    </>
  );
};

export default NewExpense;
