import React from "react";
import "../../css/ExpenseFilter.css";

interface Props {
  onSelectYear: (year: string) => void;
  selected: string;
}

const ExpenseFilter = ({ onSelectYear, selected }: Props) => {
  const onSelectChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onSelectYear(event.target.value);
  };

  return (
    <>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={selected} onChange={onSelectChangeHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpenseFilter;
