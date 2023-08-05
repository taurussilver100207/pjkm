import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} -{' '}
          {expense.title} - ${expense.amount}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
