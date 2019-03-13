import { combineReducers } from 'redux';
import expenses from './expensesReducer';

const rootReducer = combineReducers({
  expenses
});

export default rootReducer;
