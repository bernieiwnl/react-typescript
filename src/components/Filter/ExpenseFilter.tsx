import React from "react";
import "../../css/ExpenseFilter.css";
import { ARRAY_OF_YEAR } from "../Utils/Data";

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
            {ARRAY_OF_YEAR.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpenseFilter;
