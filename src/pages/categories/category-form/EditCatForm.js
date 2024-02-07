import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updtateCategoriesAction } from "../CategoryAction";
import { CustomModal } from "../modal/CustomModal";

const initialState = {
  status: "inactive",
  name: "",
  parentId: null,
};
const EditCatForm = ({ selectedCat }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    setForm(selectedCat);
  }, [selectedCat]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, slug, updatedAt, createdAt, ...rest } = form;

    dispatch(updtateCategoriesAction(rest));
    console.log(rest);
  };
  return (
    <CustomModal>
      <Form
        className="py-4 mb-5 border p-3 bg-dark rounded shadow-lg"
        onSubmit={handleOnSubmit}
      >
        <h3 className="text-light">Edit Category Form </h3>
        <Row className="g-2">
          <Col md="2">
            <Form.Group>
              <Form.Check
                type="switch"
                label="status"
                name="status"
                onChange={handleOnChange}
                checked={form.status === "active"}
              />{" "}
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group>
              <Form.Select name="parentId" onChange={handleOnChange}>
                <option value="">Select Parent Category</option>
                {categories?.length > 0 &&
                  categories.map(
                    (item) =>
                      !item.parentId && (
                        <option
                          value={item._id}
                          selected={item._id === form.parentId}
                        >
                          {item.name}
                        </option>
                      )
                  )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group>
              <Form.Control
                onChange={handleOnChange}
                type="text"
                placeholder="Category Name"
                name="name"
                required
                value={form.name}
              />
            </Form.Group>
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </CustomModal>
  );
};

export default EditCatForm;
