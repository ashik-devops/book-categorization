import jwt from "jsonwebtoken";
import moment from "moment";

export default function withAuth(authData) {
  const tokenData = jwt.decode(authData.token);
  return tokenData && moment(tokenData._payload.expires) > moment();
}
