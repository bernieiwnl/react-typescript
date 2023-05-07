import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "./Card";

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
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
