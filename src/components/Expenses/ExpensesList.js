import { useState } from 'react';

import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {

    if (!expenses.length) {
        return <h2 className='expenses-list__fallback '>Found no expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            { expenses.map(expense => ( 
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}     
                />
            )) }
        </ul>
    )
}

export default ExpensesList;
