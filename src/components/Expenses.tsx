import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface Expenses {
  expenses: Expense[];
}

const Expenses = (props: Expenses) => {
  const { expenses } = props;
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;

/* <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
        <ExpenseItem
            title={expenses[1].title}
            date={expenses[1].date}
            amount={expenses[1].amount}
        />
        <ExpenseItem
            title={expenses[2].title}
            date={expenses[2].date}
            amount={expenses[2].amount}
        />   */
