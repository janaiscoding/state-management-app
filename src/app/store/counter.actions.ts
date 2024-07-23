import { Action } from "@ngrx/store";

export const INCREMENT = "[Counter] Increment";
export const DECREMENT = "[Counter] Decrement";
export const INIT = "[Counter] Init";
export const SET = "[Counter] Set";

export class InitAction implements Action {
  readonly type = INIT;
}

export class SetAction implements Action {
  readonly type = SET;

  constructor(public value: number) {}
}

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor(public value: number) {}
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;

  constructor(public value: number) {}
}

export type CounterActions =
  | InitAction
  | SetAction
  | IncrementAction
  | DecrementAction;
