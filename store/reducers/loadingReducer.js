const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return (state = true);
    case "RESET_LOADING":
      return (state = false);
    default:
      return state;
  }
};

export default loadingReducer;
