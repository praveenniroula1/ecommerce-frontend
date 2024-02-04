import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";
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
};
