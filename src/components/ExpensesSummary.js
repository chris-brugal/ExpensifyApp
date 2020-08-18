import React from 'react';
import {connect} from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral'
import {Link} from 'react-router-dom';

const ExpenseSummary = (props) =>{
    return(
        <div className="page-header"> 
            <div className="content-container">
                {
                    props.expenses.length >= 1? 
                        (props.expenses.length === 1? 
                            <h1 className="page-header__title">Viewing <span>1</span> expense totalling <span>{numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}</span></h1> 
                            :
                            <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses totalling <span>{numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}</span></h1>)
                    : 
                    (<h1>Viewing <span>0</span> expenses totalling <span>$0.00</span></h1>)
                }
                <div className="page-header__actions">
                    <Link className="button" to="/create"> Add Expense</Link>
                </div>
            </div>
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