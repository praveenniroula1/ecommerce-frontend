import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Button, Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import CustomInputField from "../../components/customInputField/CustomInputField";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, loginUserAction } from "./UserAction";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [form, setForm] = useState({});
  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/dashboard";

  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    user?._id ? navigate(origin) : dispatch(autoLogin());
  }, [user, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(form));
  };

  return (
    <div>
      <Header />

      <Container className="page-main">
        <Form className="form" onSubmit={handleOnSubmit}>
          <h3>Login Form</h3>
          <CustomInputField
            label="Email"
            placeholder="Enter your email"
            type="email"
            onChange={handleOnChange}
            name="email"
            required="true"
            value={form.email}
          />
          <CustomInputField
            label="Password"
            placeholder="Enter your Password"
            type="password"
            onChange={handleOnChange}
            name="password"
            required="true"
            value={form.password}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
};

export default LoginPage;
