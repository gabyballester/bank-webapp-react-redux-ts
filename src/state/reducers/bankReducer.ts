import { ActionType } from "../action-types";
import { Action } from "../actions/index";
// import {Action} from "../actions";

// estado inicial que le paso al reducer
const initialState = 0;

// Función reductora que recibe
// 1. estado, tipo numero
// 2 action, tipo Action
const reducer = (state: number = initialState, action: Action) => {
  switch (
    action.type // selector de tipo
  ) {
    case ActionType.DEPOSIT: //meter dinero, suma cantidades
      return state + action.payload;
    case ActionType.WITHDRAW: //sacar dinero, resta cantidades
      return state - action.payload;
    case ActionType.BANKRUPT: //bancarrota, devuelve 0
      return 0;
    default:
      return state;
  }
};

export default reducer;
