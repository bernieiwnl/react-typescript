import ExpenseForm from "./ExpenseForm";
import "../../css/NewExpense.css";
import { Expense } from "../utils/ExpenseType";

interface Props {
  onAddExpense: (chilExpense: Expense) => void;
}

const NewExpense = ({ onAddExpense }: Props) => {
  const saveExpenseHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // pass data from new expense component to parent (App component)
    onAddExpense(expenseData);
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
