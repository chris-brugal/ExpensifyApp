import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () =>({type: 'RESET'});

const setCount = ({count} = {}) =>({
    type: 'SET',
    count: count
});


//Reducers: 
//1.pure functions
//2.never change state or action 
const countReducer = (state = {count: 0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count  
            }
        default:
            return state;
    }   
}

const store = createStore(countReducer);

store.subscribe(() => {
    //gets called everytime that the state changes
    console.log(store.getState());
});

//increment
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 100}));