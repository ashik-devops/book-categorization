import { accountActionCreators } from ".";
import ApiClient from "../../lib/ApiClient";
import _ from "lodash";
export const fetchUsers = () => {
  return (dispatch, getState) => {
    const authData = getState().account;
    const apiClient = ApiClient(authData);
    apiClient
      .get("/api/users")
      .then((response) => {
        dispatch({
          type: "SET_USERS",
          payload: { users: response.data.responseData.users },
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          //unauthorized
          dispatch(accountActionCreators.logout());
        }
      });
  };
};
export const fetchDcs = () => {
  return (dispatch, getState) => {
    const authData = getState().account;
    const apiClient = ApiClient(authData);
    apiClient
      .get("/api/users/getDcList")
      .then((response) => {
        dispatch({
          type: "SET_DC",
          payload: { dcs: response.data.responseData.dcs },
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          //unauthorized
          dispatch(accountActionCreators.logout());
        }
      });
  };
};

export const createUser = (userData, success, failed) => {
  return (dispatch, getState) => {
    const authData = getState().account;
    const apiClient = ApiClient(authData);
    _.forEach(userData, (val, key) => {
      if (val == "") {
        userData[key] = null;
      }
    });
    apiClient
      .put("/api/users/save", { userData: userData })
      .then((response) => {
        if (response.status === 201) {
          success(response.data.responseData.userData);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          //unauthorized
          dispatch(accountActionCreators.logout());
        } else {
          failed(error);
        }
      });
  };
};
