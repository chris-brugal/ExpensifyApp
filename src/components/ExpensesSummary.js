import React from 'react';
import {connect} from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral'

const ExpenseSummary = (props) =>{
    return(
        <div> 
            {
                props.expenses.length >= 1? 
                    (props.expenses.length === 1? 
                        <h1>Viewing 1 expense totalling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}</h1> 
                        :
                        <h1>Viewing {props.expenses.length} expenses totalling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}</h1>)
                : 
                (<h1>Viewing 0 expenses totalling $0.00</h1>)
            }
        </div>
    )
};

const mapStateToProps = (state) =>{
    //the filtered expenses are being shown now with the call to the selected expenses func
    return{
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);