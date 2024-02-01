import axios from "axios";
const url = "http://localhost:8001/api/v1";

const apiProcessor = async ({ method, data, url }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// post new user
export const postUser = (data) => {
  const options = {
    method: "post",
    url: url + "/user/register",
    data,
  };
  return apiProcessor(options);
};

// verify user email acoount
export const emailVerifyUser = (data) => {
  const options = {
    method: "patch",
    url: url + "/user/verify-email",
    data,
  };
  return apiProcessor(options);
};

// verify user email acoount
export const loginUser = (data) => {
  const options = {
    method: "post",
    url: url + "/user/login",
    data,
  };
  return apiProcessor(options);
};
