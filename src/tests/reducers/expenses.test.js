import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set the default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expense if not found by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: 'Key',
            note: '',
            amount: 2000,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Key'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('Key');
});

test('Should not edit expense due to ID not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 4,
        updates: {
            description: 'Not Found',
            note: '',
            amount: 0,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});