import React from 'react';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme'; 
import {EditExpensePage} from '../../components/EditExpensePage';

//refactor edit expense to be a class based component
//setup mapDispatchToProps editExp and remExp
let editExpense, history, wrapper, removeExpense ;
beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage history={history} editExpense={editExpense} removeExpense={removeExpense} expense={expenses[2]}/>);
});

//should render Edit (snapshot)
test('Should render edit', () => {
    expect(wrapper).toMatchSnapshot();    
});

//should handle edit exp (spies)
test('should handle edit exp', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);

});

//should handle remove exp (spies)
test('should handle remove exp', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});
