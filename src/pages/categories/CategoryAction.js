import { toast } from "react-toastify";
import { fetchCategory, postCategory } from "../../helper/axiosHelper";
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
