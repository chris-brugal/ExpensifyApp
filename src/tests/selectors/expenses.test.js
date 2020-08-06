import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expensesData from '../fixtures/expenses';


test('Should filter by text value', () =>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesData, filters);
    expect(result).toEqual([ expensesData[2], expensesData[1] ]);
});

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expensesData, filters);
    expect(result).toEqual([ expensesData[2], expensesData[0] ]);
});

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expensesData, filters);
    expect(result).toEqual([ expensesData[0], expensesData[1] ]);
});

test('Should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesData, filters);
    expect(result).toEqual([ expensesData[2], expensesData[1], expensesData[0] ]);
});

test('Should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expensesData, filters);
    expect(result).toEqual([ expensesData[2], expensesData[0], expensesData[1] ]);
});

