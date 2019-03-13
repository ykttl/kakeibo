import { SAVE_AN_EXPENSE } from '../actions/expensesActions';

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_AN_EXPENSE:
      return [...state, action.data];
    default:
      return state;
  }
};

export default expensesReducer;
