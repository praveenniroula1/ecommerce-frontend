import axios from "axios";
const url = "http://localhost:8001/api/v1";

export const createUser = async (form) => {
  const { data } = await axios.post(url + "/user/register", form);
  console.log(data);
  return data;
};
export const loginUser = async (obj) => {
  try {
    const response = await axios.post(url + "/user/login", obj);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
