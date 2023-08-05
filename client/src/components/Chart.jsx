import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ expenses }) => {
  // Calculate total expenses for each month in the selected year
  const monthlyExpenses = {};
  expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    monthlyExpenses[month] = (monthlyExpenses[month] || 0) + expense.amount;
  });

  const chartData = Object.keys(monthlyExpenses).map((month) => {
    return { month: parseInt(month, 10) + 1, amount: monthlyExpenses[month] };
  });

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
