import { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ date, amount, title }) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date} />
                <div className='expense-item__text'>
                    <h2>{ title }</h2>
                    <div className='expense-item__plate'>${ amount }</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;
