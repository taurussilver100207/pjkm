import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import Chart from './components/Chart.jsx';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2023);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear() === selectedYear
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={filteredExpenses} />
      <Chart expenses={filteredExpenses} />
      <div>
        <button onClick={() => changeYearHandler(2021)}>2021</button>
        <button onClick={() => changeYearHandler(2022)}>2022</button>
        <button onClick={() => changeYearHandler(2023)}>2023</button>
        <button onClick={() => changeYearHandler(2024)}>2024</button>
      </div>
    </div>
  );
};

export default App;
