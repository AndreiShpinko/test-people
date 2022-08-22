const Services = {
  API_URL: "http://opn-interview-service.nn.r.appspot.com",
  JWT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs",

  getRandomUsers() {
    return fetch(`${this.API_URL}/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.JWT}`,
      },
    });
  },

  getUserByID(ID: string | undefined) {
    return fetch(`${this.API_URL}/get/${ID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.JWT}`,
      },
    });
  },
};

export default Services;
