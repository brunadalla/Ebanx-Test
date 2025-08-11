import type { IAccount } from "./account.interface";

export interface IDepositEvent {
  type: "deposit";
  destination: string; // account_id
  amount: number;
}

export interface IWithdrawEvent {
  type: "withdraw";
  origin: string; // account_id
  amount: number;
}

export interface ITransferEvent {
  type: "transfer";
  origin: string;
  amount: number;
  destination: string;
}

export type EventPayload = IDepositEvent | IWithdrawEvent | ITransferEvent;

export interface IDepositResponse {
  destination: IAccount;
}

export interface IWithdrawResponse {
  origin: IAccount;
}

export interface ITransferResponse {
  origin: IAccount;
  destination: IAccount;
}