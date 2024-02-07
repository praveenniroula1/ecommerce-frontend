import { toast } from "react-toastify";
import {
  deleteCategory,
  fetchCategory,
  postCategory,
  updateCategory,
} from "../../helper/axiosHelper";
import { setCategories } from "./categorySlice";

export const fetchCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategory();
  status === "success" && dispatch(setCategories(categories));
};

export const postCategoriesAction = (data) => async (dispatch) => {
  const promisePending = postCategory(data);
  toast.promise(promisePending, { pending: "Please wait ..." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(fetchCategoriesAction());
};

export const updtateCategoriesAction = (data) => async (dispatch) => {
  const promisePending = updateCategory(data);
  toast.promise(promisePending, { pending: "Please wait ..." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(fetchCategoriesAction());
};

export const deleteCategoriesAction = (_id) => async (dispatch) => {
  const pormisePending = deleteCategory(_id);
  toast.promise(pormisePending, { pending: "Please wait ..." });

  const { status, message } = await pormisePending;
  toast[status](message);

  status === "success" && dispatch(fetchCategoriesAction());
};
