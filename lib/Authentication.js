import jwt from "jsonwebtoken";
import _ from "lodash";

export function Can(
  token,
  action,
  entity,
  scope = "any",
  scope_attribute = "any"
) {
  const tokenData = jwt.decode(token);

  if (!(tokenData && tokenData._payload)) {
    return false;
  }
  let permissions = tokenData._payload.permissions;
  if (
    permissions["*"] &&
    permissions["*"].action == "*" &&
    ["*", "any"].includes(scope) &&
    ["*", "any"].includes(scope_attribute)
  ) {
    return true;
  }
  if (permissions[entity]) {
    for (let i = 0; i < permissions[entity].length; i++) {
      if ([action, "*"].includes(permissions[entity][i].name)) {
        if (scope == "any" || scope == permissions[entity][i].scope) {
          if (
            scope_attribute == "any" ||
            scope_attribute == permissions[entity][i].scope_attribute
          ) {
            return true;
          }
        }
      }
    }
  }
  

  return false;
}