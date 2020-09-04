export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const GET_USERS_LOADING = "GET_USERS_LOADING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const GET_USER_LOADING = "GET_USER_LOADING";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const CREATE_USER_LOADING = "CREATE_USER_LOADING";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export const UPDATE_USER_LOADING = "UPDATE_USER_LOADING";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const DELETE_USER_LOADING = "DELETE_USER_LOADING";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export type UserType = {
  id: string;
  name: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  companyName: string;
};

export interface setSearchValue {
  type: typeof SET_SEARCH_VALUE;
  payload: string;
}

// GET ALL USERS
//===========

export interface getUsersLoading {
  type: typeof GET_USERS_LOADING;
}

export interface getUsersFail {
  type: typeof GET_USERS_FAIL;
  payload: string;
}

export interface getUsersSuccess {
  type: typeof GET_USERS_SUCCESS;
  payload: UserType[];
}

// GET USER BY ID
//============
export interface getUserLoading {
  type: typeof GET_USER_LOADING;
}

export interface getUserFail {
  type: typeof GET_USER_FAIL;
  payload: string;
}

export interface getUserSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: UserType;
}

// CREATE NEW USER
//=============
export interface createUserLoading {
  type: typeof CREATE_USER_LOADING;
}

export interface createUserFail {
  type: typeof CREATE_USER_FAIL;
  payload: string;
}

export interface createUserSuccess {
  type: typeof CREATE_USER_SUCCESS;
  payload: UserType;
}

// UPDATE USER
//=============
export interface updateUserLoading {
  type: typeof UPDATE_USER_LOADING;
}

export interface updateUserFail {
  type: typeof UPDATE_USER_FAIL;
  payload: string;
}

export interface updateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
  payload: UserType;
}

// DELETE USER
//=============
export interface deleteUserLoading {
  type: typeof DELETE_USER_LOADING;
}

export interface deleteUserFail {
  type: typeof DELETE_USER_FAIL;
  payload: string;
}

export interface deleteUserSuccess {
  type: typeof DELETE_USER_SUCCESS;
  payload: UserType;
}

export type UsersDispatchTypes =
  | setSearchValue
  | getUsersLoading
  | getUsersSuccess
  | getUsersFail
  | getUserLoading
  | getUserSuccess
  | getUserFail
  | createUserLoading
  | createUserFail
  | createUserSuccess
  | updateUserLoading
  | updateUserFail
  | updateUserSuccess
  | deleteUserLoading
  | deleteUserFail
  | deleteUserSuccess;
