import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expensesActions from '../actions/expensesActions';

class Inputs extends Component {
  componentDidUpdate() {
    console.log(this.props.expensesReducer);
  }
  state = { date: '', price: '', item: '' };
  inputDate = e => {
    this.setState({ date: e.target.value });
  };
  inputPrice = e => {
    this.setState({ price: e.target.value });
  };
  inputItem = e => {
    this.setState({ item: e.target.value });
  };
  handleClick = e => {
    console.log('clicked');
    this.props.expensesActions.saveAnExpense(this.state);
  };
  render() {
    return (
      <div style={{ background: 'yellow', display: 'flex' }}>
        <p>
          DATE <input type="text" onChange={this.inputDate} />
        </p>
        <p>
          PRICE <input type="text" onChange={this.inputPrice} />
        </p>
        <p>
          ITEM <input type="text" onChange={this.inputItem} />
        </p>
        <button onClick={this.handleClick}>Add New Expense</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expensesReducer: state.expensesReducer
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
)(Inputs);
