import { Action } from "@ngrx/store";
import {
  CounterActions,
  DECREMENT,
  DecrementAction,
  INCREMENT,
  IncrementAction,
  SET,
  SetAction,
} from "./counter.actions";

const initialState = 0;

export function counterReducer(
  state = initialState,
  action: CounterActions | Action
) {
  if (action.type === SET) {
    return (action as SetAction).value;
  }

  if (action.type === INCREMENT) {
    // Type casting :magic:
    return state + (action as IncrementAction).value;
  }

  // clean and simple and focused on their core job
  if (action.type === DECREMENT) {
    console.log("decrement");
    // Type casting :magic:
    return state - (action as DecrementAction).value;
  }

  return state;
}
