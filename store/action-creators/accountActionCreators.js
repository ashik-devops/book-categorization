import ApiClient from "../../lib/ApiClient";

export const login = (authData) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN",
      payload: { authData: authData },
    });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    const authData = getState().account;
    const apiClient = ApiClient(authData);
    apiClient
      .post("/api/auth/logout")
      .then((response) => {
        dispatch({
          type: "LOGOUT",
          payload: {},
        });
      })
      .catch((error) => {});
  };
};
