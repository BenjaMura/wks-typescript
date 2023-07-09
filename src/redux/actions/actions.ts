import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "http://localhost:3001/api/user";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};
