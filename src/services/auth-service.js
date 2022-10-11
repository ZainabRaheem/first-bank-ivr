import axios from "axios";

const API_URL =
  "https://visitmgtsystem-dev-dmz.fbn-devops-devdmz.net/api/FrontOffice/";

const login = async (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data.data);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const allFunctions = {
  login,
  logout,
};

export default allFunctions;
