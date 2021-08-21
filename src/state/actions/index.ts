import { ActionType } from "../action-types/index";
// import { ActionType } from "../action-types";

//Interfaces para las acciones
interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;
