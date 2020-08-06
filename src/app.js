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
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter ></AppRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 


