import axios from "axios";
const url = "http://localhost:8001/api/v1";

const apiProcessor = async ({ method, data, url, isPrivate, token }) => {
  try {
    const headers = isPrivate
      ? {
          Authorization: token || sessionStorage.getItem("accessJwt"),
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
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("accessJwt");
      localStorage.removeItem("refreshJwt");
    }
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    if (message === "jwt expired") {
      const accessJwt = await getNewAccessJwt();
      if (accessJwt) {
        return apiProcessor({ method, data, url, isPrivate, token });
      }
    }
    return {
      status: "error",
      message,
    };
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
export const getAdminUser = (token) => {
  const options = {
    method: "post",
    url: url + "/user",
    isPrivate: true,
    token,
  };
  return apiProcessor(options);
};

// get admin user
export const getNewAccessJwt = async () => {
  const options = {
    method: "post",
    url: url + "/user" + "/accessJwt",
    isPrivate: true,
    token: localStorage.getItem("refreshJwt"),
  };
  const { status, accessJwt } = await apiProcessor(options);
  status === "success" && sessionStorage.setItem("accessJwt", accessJwt);
  return accessJwt;
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
