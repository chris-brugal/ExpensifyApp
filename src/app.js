// cd Desktop/Code/ReactCourse/ExpensifyApp/ExpensifyApp
// yarn run dev-server
// yarn install
// yarn run build
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/Playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import {firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter ></AppRouter>
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app')); 
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app')); 

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
               history.push('/dashboard'); 
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
