// cd Desktop/Code/ReactCourse/ExpensifyApp/ExpensifyApp
// yarn run dev-server
// yarn install
// yarn run build
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/Playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description:'water bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description:'gas bill', amount: 400, createdAt: -1000}));
store.dispatch(addExpense({description:'rent', amount: 109500, createdAt: 4500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter ></AppRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 


