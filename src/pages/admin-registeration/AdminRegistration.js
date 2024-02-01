import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CustomInputField from "../../components/customInputField/CustomInputField";
import { postUser } from "../../helper/axiosHelper";

const AdminRegistration = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return window.alert("Your password do not match");
    }
    const result = await postUser(form);
    setResponse(result);
  };

  const fields = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Praveen",
      name: "fName",
      required: true,
      value: form.fName,
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Niroula",
      name: "lName",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "a@a.com",
      name: "email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "******",
      name: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "******",
      name: "confirmPassword",
      required: true,
    },
  ];

  return (
    <div>
      <Header />
      <Container className="page-main">
        <Form className="form p-4" onSubmit={handleOnSubmit}>
          <h2>Register Form</h2>
          <hr></hr>
          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
          {fields.map((item, i) => (
            <CustomInputField key={i} {...item} onChange={handleOnChange} />
          ))}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminRegistration;
