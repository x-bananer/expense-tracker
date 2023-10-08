import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2023, 5, 12),
	},
	{
		id: 'e5',
		title: 'A Book',
		amount: 29.99,
		date: new Date(2019, 6, 1),
	},
	{
		id: 'e6',
		title: 'Headphones',
		amount: 129.99,
		date: new Date(2022, 10, 5),
	},
	{
		id: 'e7',
		title: 'Groceries',
		amount: 75.65,
		date: new Date(2020, 3, 20),
	},
	{
		id: 'e8',
		title: 'Laptop',
		amount: 999.99,
		date: new Date(2023, 2, 8),
	},
	{
		id: 'e9',
		title: 'Gym Membership',
		amount: 49.99,
		date: new Date(2022, 7, 15),
	}
]

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addNewExpenseHandler = (expense) => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addNewExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
