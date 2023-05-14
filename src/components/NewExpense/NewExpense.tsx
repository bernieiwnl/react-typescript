import ExpenseForm from "./ExpenseForm";
import "../../css/NewExpense.css";

interface Props {
  onAddExpense: (chilExpense: Expense) => void;
}

type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

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
