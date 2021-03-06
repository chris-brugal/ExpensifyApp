import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) =>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE_EXPENSE
const removeExpense = ({id}={}) =>({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE  
const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//SET_TEXT_FILTER
const setTextFilter = (text = '') =>({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () =>({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});
//SORT_BY_AMOUNT
const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
//SET_START_DATE
const setStartDate = (startDate = undefined) =>({
    type: 'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate = undefined) =>({
    type: 'SET_END_DATE',
    endDate
});


//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                        //creates the expense obj and then updates all of the req updates
                    }    
                }else{
                    return expense
                }
        })
        default:
            return state;
    }
}

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate:  undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return({
                ...state,
                text: action.text
            });
        case 'SORT_BY_DATE':
            return({
                ...state,
                sortBy: action.sortBy
            });
        case 'SORT_BY_AMOUNT':
            return({
                ...state,
                sortBy: action.sortBy
            });
        case 'SET_START_DATE':
            return({
                ...state,
                startDate: action.startDate
            });
        case 'SET_END_DATE':
            return({
                ...state,
                endDate: action.endDate
            });
        default:
            return state;
    }
}

//seconds are timestamps in milliseconds after January 1st 1970 

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return (a.createdAt < b.createdAt ? 1 : -1);
        }else if (sortBy === 'amount'){
            return (a.amount < b.amount ? 1 : -1);
        }
    });
}

//Store creation, using combine reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});




//expenses
 const expenseOne = store.dispatch(addExpense({description:'rent', amount: 100, createdAt: 1000}));
 const expenseTwo = store.dispatch(addExpense({description:'coffeee', amount: 400, createdAt: -1000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 200}));

// //filters
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


/*
const expenseOne = store.dispatch(addExpense({description:'water bill', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'gas bill', amount: 400, createdAt: -1000}));
store.dispatch(setTextFilter('water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
*/




//rando
const demoState = {
    expenses: [{
        id: 'asdfjkl;',
        description: 'Jan Rent',
        note: 'this was the final payment',
        amount: '54500',
        createdAt: 0 
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'chris',
    age: 10
}
// console.log({
//     ...user,
//     location: 'FL',
//     age: 27
// })