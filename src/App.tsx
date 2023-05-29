import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expense } from "./components/utils/ExpenseType";
import { DUMMY_EXPENSES } from "./components/utils/DummyExpense";
import "./App.css";

function App() {
  const [currentExpenses, setCurrentExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: Expense) => {
    console.log("triggering addExpenseHandler");
    setCurrentExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={currentExpenses} />
    </div>
  );
}

export default App;
