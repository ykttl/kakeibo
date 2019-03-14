import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expensesActions from '../actions/expensesActions';

class Chart extends Component {
  render() {
    return (
      <div>
        {this.props.expensesReducer.map((item, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <p>{item.date}</p>
            <p>{item.price}</p>
            <p>{item.item}</p>
          </div>
        ))}
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
)(Chart);
