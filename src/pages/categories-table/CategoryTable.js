import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoriesAction,
  fetchCategoriesAction,
} from "../categories/CategoryAction";
import { Button, Row, Table } from "react-bootstrap";
import EditCatForm from "../categories/category-form/EditCatForm";
import { setModalShow } from "../system-slice/systemSlice";

const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState({});

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, []);

  const handleOnEdit = (cat) => {
    setSelectedCat(cat);
    dispatch(setModalShow());
  };

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure, you want to delete this category?")) {
      dispatch(deleteCategoriesAction(_id));
    }
  };

  const parentCats = categories.filter(({ parentId }) => !parentId);
  const childCats = categories.filter(({ parentId }) => parentId);
  return (
    <Row>
      <EditCatForm selectedCat={selectedCat} />
      <h1>CategoryTable</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            parentCats.map((item) => (
              <>
                <tr key={item._id} className="fw-bold">
                  <td
                    className={
                      item.status === "active" ? "text-success " : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "parent"}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleOnDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr key={cat._id}>
                        <td
                          className={
                            cat.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {cat.status}
                        </td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "parent"}</td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={() => handleOnDelete(cat._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
        </tbody>
      </Table>
    </Row>
  );
};

export default CategoryTable;
