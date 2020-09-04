import {
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
  UsersDispatchTypes,
} from "./types";

interface DefaultStateI {
  errorCode: any;
  loading: boolean;
  loaded: boolean;
  users?: UserType[];
  user?: UserType | null;
  searchValue: string;
}

const defaultState: DefaultStateI = {
  errorCode: null,
  loading: false,
  loaded: false,
  users: [],
  user: null,
  searchValue: "",
};

const usersReducer = (
  state: DefaultStateI = defaultState,
  action: UsersDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errorCode: action.payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload,
      };

    case GET_USER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorCode: action.payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload,
      };

    case CREATE_USER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorCode: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload,
      };

    case UPDATE_USER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorCode: action.payload,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload,
      };
    case DELETE_USER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorCode: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
