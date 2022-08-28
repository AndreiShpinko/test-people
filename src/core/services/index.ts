import axios from "axios";

const Services = {
  getRandomUsers() {
    const { REACT_APP_API_URL, REACT_APP_JWT } = process.env;
    return axios.get(`${REACT_APP_API_URL}/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${REACT_APP_JWT}`,
      },
    });
  },

  getUserByID(ID: string | undefined) {
    const { REACT_APP_API_URL, REACT_APP_JWT } = process.env;
    return axios.get(`${REACT_APP_API_URL}/get/${ID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${REACT_APP_JWT}`,
      },
    });
  },
};

export default Services;
