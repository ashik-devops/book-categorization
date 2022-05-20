const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      state = action.payload.users;
      return state;
    default:
      return state;
  }
};

export default usersReducer;
