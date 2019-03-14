import * as types from './actionTypes';

export const saveAnExpense = expense => {
  console.log(expense);
  return {
    type: types.SAVE_AN_EXPENSE,
    data: expense
  };
};
