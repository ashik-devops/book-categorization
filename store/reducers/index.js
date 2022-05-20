import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import usersReducer from "./usersReducer";
import rolesReducer from "./rolesReducer";
import loadingReducer from "./loadingReducer";
const reducers = combineReducers({
  account: accountReducer,
  users: usersReducer,
  roles: rolesReducer,
  loadingStatus: loadingReducer,
});

export default reducers;
