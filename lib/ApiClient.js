import axios from "axios";

function ApiClient(authData) {
  if (authData) {
    axios.defaults.headers.common["x-clx-auth"] = authData.token;
  }
  return axios;
}

export default ApiClient;
