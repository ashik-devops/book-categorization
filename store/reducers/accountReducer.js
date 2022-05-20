const initialState = {};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = action.payload.authData;
      return state;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default accountReducer;
