import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startEditExpenses, startRemoveExpenses} from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense)=> {
    //dispatch the action to edit the expense
    //redirect to the dashboard
    this.props.startEditExpenses(this.props.expense.id, expense);
    this.props.history.push('/');
    //console.log('updated', expense);
  }

  onClick = ()=>{
    this.props.startRemoveExpenses({id: this.props.expense.id});
    this.props.history.push("/");
  }

  render(){
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button-remove" onClick={this.onClick}>Remove Expense</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
   return{
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   };
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
    startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
