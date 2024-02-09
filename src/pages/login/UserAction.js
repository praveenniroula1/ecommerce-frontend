import { toast } from "react-toastify";
import {
  getAdminUser,
  getNewAccessJwt,
  loginUser,
} from "../../helper/axiosHelper";
import { setUser } from "./UserSlice";

export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginUser(data);
  toast.promise(resultPromise, { pending: "please wait..." });
  const { status, message, user, accessJwt, refreshJwt } = await resultPromise;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJwt", accessJwt);
    localStorage.setItem("refreshJwt", refreshJwt);
    dispatch(setUser(user));
  }
};

export const logoutAction = () => (dispatch) => {
  dispatch(setUser({}));
  sessionStorage.removeItem("accessJwt");
  localStorage.removeItem("refreshJwt");
};

// fetch user and mount in redux store
export const getAdminUserAction = (token) => async (dispatch) => {
  const { status, message, user } = await getAdminUser(token);
  status === "success" && dispatch(setUser());
};

export const autoLogin = () => async (dispatch) => {
  const accessJwt = sessionStorage.getItem("accessJwt");
  const refreshJwt = localStorage.getItem("refreshJwt");

  if (accessJwt) {
    dispatch(getAdminUserAction());
  } else if (refreshJwt) {
    const token = await getNewAccessJwt();
    token ? dispatch(getAdminUserAction(token)) : dispatch(logoutAction);
  } else {
    dispatch(logoutAction());
  }
};
