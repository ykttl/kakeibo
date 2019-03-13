import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expensesActions from '../../actions/expenseActions';
import React, { Component } from 'react';
import Inputs from './Inputs';
import Chart from './Chart';

class AddExpense extends Component {
  componentWillMount() {
    this.props.expensesActions.saveAnExpense();
  }
  render() {
    return (
      <div>
        <Inputs />
        <Chart />
        <p>{this.props.expenses}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    expenses: state.expenses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    expensesActions: bindActionCreators(expensesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpense);
