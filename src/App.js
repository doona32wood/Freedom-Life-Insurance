import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Term Life Basic Policy', amount: 120, category: 'Premium' },
    { id: 2, title: 'Health Rider Add-on', amount: 45, category: 'Rider' }
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="dashboard-layout">
        <div>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
        <div>
          <Receipt expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
