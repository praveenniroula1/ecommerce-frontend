import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import CategoryTable from "../categories-table/CategoryTable";
import AddCatForm from "./category-form/AddCatForm";

const Category = () => {
  return (
    <UserLayout>
      <h2 className="py-3">Category Management</h2>
      <AddCatForm />
      <CategoryTable />
    </UserLayout>
  );
};

export default Category;
