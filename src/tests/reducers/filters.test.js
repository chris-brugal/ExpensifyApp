import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () =>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sort by to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT', 
        sortBy: 'amount'
    });
    expect(state.sortBy).toBe('amount');
});

test('Should set sort by to date', () =>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SORT_BY_DATE', 
        sortBy: 'date'
    };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'Test Text'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE', 
        startDate: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
     };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});