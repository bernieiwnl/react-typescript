import ExpenseItem from "./ExpenseItem";
import { Expense } from "../Utils/Type";
import "../../css/ExpenseList.css";

interface Props {
  items: Expense[];
}

const ExpenseList = (props: Props) => {
  const { items } = props;
  const contentItems = items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      date={item.date}
      amount={item.amount}
    />
  ));

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Items Found.</h2>;
  }

  return (
    <>
      <ul className="expenses-list">{contentItems}</ul>
    </>
  );
};

export default ExpenseList;
