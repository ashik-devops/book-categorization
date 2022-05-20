const initialState = [];

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROLES":
      state = action.payload.roles;
      return state;
    default:
      return state;
  }
};

export default rolesReducer;
