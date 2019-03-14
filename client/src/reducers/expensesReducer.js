import { SAVE_AN_EXPENSE } from '../actions/actionTypes';

const expensesReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case SAVE_AN_EXPENSE:
      return [...state, action.data];
    default:
      return state;
  }
};

export default expensesReducer;
