import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { User } from "../actions/actions";

export interface StoreState {
  users: User[];
  [key: string]: any;
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer,
});

/* interface stateI {
  counter: number;
}

const initialState: stateI = {
  counter: 1,
};

interface actionI {
  type: string;
}

export default function reducer(state: stateI = initialState, action: actionI) {
  return state;
} */
