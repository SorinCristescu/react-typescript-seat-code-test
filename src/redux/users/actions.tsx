import { Dispatch } from "redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import {
  UsersDispatchTypes,
  SET_SEARCH_VALUE,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UserType,
} from "./types";

export const setSearchValue = (value: string) => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  dispatch({
    type: SET_SEARCH_VALUE,
    payload: value,
  });
};

export const getUsers = () => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  try {
    dispatch({
      type: GET_USERS_LOADING,
    });
    const response = await axios.get(`${BASE_URL}/users`);

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getUser = (id: any) => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  try {
    dispatch({
      type: GET_USER_LOADING,
    });
    const response = await axios.get(`${BASE_URL}/users/${id}`);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const createUser = (newUser: UserType) => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  try {
    dispatch({
      type: CREATE_USER_LOADING,
    });
    const response = await axios.post(`${BASE_URL}/users`, newUser);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const updateUser = (id: string, updatedUser: UserType) => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  try {
    dispatch({
      type: UPDATE_USER_LOADING,
    });
    const response = await axios.put(`${BASE_URL}/users/${id}`, updatedUser);

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteUser = (id: any) => async (
  dispatch: Dispatch<UsersDispatchTypes>
) => {
  try {
    dispatch({
      type: DELETE_USER_LOADING,
    });
    const response = await axios.delete(`${BASE_URL}/users/${id}`);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data,
    });
  }
};
