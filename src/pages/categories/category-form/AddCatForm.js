import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../CategoryAction";

const initialState = {
  status: "inactive",
  name: "",
  parentId: null,
};
const AddCatForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
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
    dispatch(postCategoriesAction(form));
  };
  const { categories } = useSelector((state) => state.category);
  return (
    <Form
      className="py-4 mb-5 border p-3 bg-dark rounded shadow-lg"
      onSubmit={handleOnSubmit}
    >
      <h3 className="text-light">Add new Category </h3>
      <Row className="g-2">
        <Col md="2">
          <Form.Group>
            <Form.Check
              type="switch"
              label="status"
              name="status"
              onChange={handleOnChange}
            />{" "}
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Group>
            <Form.Select name="parentId" onChange={handleOnChange}>
              <option value="">Select Parent Category</option>{" "}
              {categories?.length > 0 &&
                categories.map(
                  (item) =>
                    !item.parentId && (
                      <option value={item._id}>{item.name}</option>
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
            />
          </Form.Group>
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCatForm;
