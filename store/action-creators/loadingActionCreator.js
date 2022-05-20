export const setLoading = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_LOADING",
    });
  };
};

export const resetLoading = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_LOADING",
    });
  };
};
