import * as types from './actionTypes';

export const saveAnExpense = expense => {
  return {
    type: types.SAVE_AN_EXPENSE,
    data: expense
  };
};
