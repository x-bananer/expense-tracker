import { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ date, amount, title }) => {
    const [innerTitle, setTitle] = useState(title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__text'>
                <h2>{ innerTitle }</h2>
                <div className='expense-item__plate'>${ amount }</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;
