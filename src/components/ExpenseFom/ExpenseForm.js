import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const maxDate = `${year}-${month}-${day}`;
    const minYear = year - 100;
    const minDate = `${minYear}-${month}-${day}`;

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value,
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value,
        //     };
        // });
    };

    // const inputChangeHandler = (ident, value) => {
    //     if (ident === 'title') {
    //         setEnteredTitle(value);
    //         return;
    //     }

    //     if (ident === 'amount') {
    //         setEnteredAmount(value);
    //         return;
    //     }

    //     if (ident === 'date') {
    //         setEnteredDate(value);
    //         return;
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        clearForm();
    };

    const cancelHandler = () => {
        props.onCancel();
    };

    const clearForm = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form className='expense-form' onSubmit={submitHandler}>
            <div className='expense-form__controls'>
                {/* <div className='expense-form__control'>
                    <label>Title</label>
                    <input type='text' onChange={(event) => inputChangeHandler('title', event.target.value)} />
                </div> */}
                <div className='expense-form__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='expense-form__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='expense-form__control'>
                    <label>Date</label>
                    <input type='date'
                        min={minDate}
                        max={maxDate}
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='expense-form__actions'>
                <button type='button' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
