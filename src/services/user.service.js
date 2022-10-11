import axios from "axios";
import authHeader from "./auth-header";

const API_URL =
  "https://visitmgtsystem-dev-dmz.fbn-devops-devdmz.net/api/FrontOffice/";

const getUserDetails = (accountNumber) => {
  return axios.get(API_URL + accountNumber, { headers: authHeader() });
};

const allFunctions = {
  getUserDetails,
};

export default allFunctions;
