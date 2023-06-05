import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/FormExpense/NewExpense";
import { Expense } from "./components/Utils/Type";
import { DUMMY_EXPENSES } from "./components/Utils/Data";
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
