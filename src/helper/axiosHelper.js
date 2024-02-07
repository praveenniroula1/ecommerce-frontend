import axios from "axios";
const url = "http://localhost:8001/api/v1";

const apiProcessor = async ({ method, data, url, isPrivate }) => {
  try {
    const headers = isPrivate
      ? {
          Authorization: sessionStorage.getItem("accessJwt"),
        }
      : null;

    const response = await axios({
      method,
      url,
      data,
      headers,
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
    isPrivate: true,
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

// get admin user
export const getAdminUser = (data) => {
  const options = {
    method: "post",
    url: url + "/user",
    isPrivate: true,
  };
  return apiProcessor(options);
};

// fetch category
export const fetchCategory = (_id) => {
  const options = {
    method: "get",
    url: _id ? url + "/category" + "/" + _id : url + "/category",
    isPrivate: true,
  };
  return apiProcessor(options);
};

// post category
export const postCategory = (data) => {
  const options = {
    method: "post",
    url: url + "/category",
    data,
    isPrivate: true,
  };
  return apiProcessor(options);
};

// update category
export const updateCategory = (data) => {
  const options = {
    method: "put",
    url: url + "/category",
    data,
    isPrivate: true,
  };
  return apiProcessor(options);
};

//delete  category
export const deleteCategory = (_id) => {
  const options = {
    method: "delete",
    url: url + "/category" + "/" + _id,
    isPrivate: true,
  };
  return apiProcessor(options);
};
