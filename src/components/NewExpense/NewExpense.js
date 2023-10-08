import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from '../ExpenseFom/ExpenseForm';

const NewExpense = (props) => {
    const [isFormShown, setIsFormShown] = useState(false);

    const formShowingStateHandler = (value) => {
        setIsFormShown(value);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);

        formShowingStateHandler(false);
    }

    const stopEditingHandler = () => {
        formShowingStateHandler(false);
    }

    const startEditingHandler = () => {
        formShowingStateHandler(true);
    }

    return (
        <div className='new-expense'>
        { isFormShown ?
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} /> :
            <button onClick={startEditingHandler}>Add New Expense</button>
        }
        </div>
    );
}

export default NewExpense;
