import { accountActionCreators } from "./index";
import ApiClient from "../../lib/ApiClient";
export const fetchRoles = () => {
  return (dispatch, getState) => {
    const authData = getState().account;
    const apiClient = ApiClient(authData);
    apiClient
      .get("/api/roles")
      .then((response) => {
        dispatch({
          type: "SET_ROLES",
          payload: { roles: response.data.responseData.roles },
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
