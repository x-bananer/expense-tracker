import { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onApplyFilter={filterChangeHandler} />
                { expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    )
}

export default Expenses;
