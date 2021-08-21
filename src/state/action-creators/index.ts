//importo el type dispatch de redux
import { Dispatch } from "redux";
//importo las actiontypes
import { ActionType } from "../action-types";
import { Action } from "../actions";
// import { Action } from "../actions/index";

// amount tipo number y se lo paso al argumento para usarlo en todos
type Amount = number;

export const depositMoney = (amount: Amount) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: Amount) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = (amount: Amount) => {
  // amount es tipo number
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
      payload: amount,
    });
  };
};
