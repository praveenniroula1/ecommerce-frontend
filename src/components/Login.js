import React, { useState } from "react";
import { loginUser } from "../helper/axiosHelper";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser(form);
  };
  return (
    <div className="middle">
      <form onSubmit={handleOnSubmit}>
        <h4>Login Form</h4>
        <input
          name="email"
          value={form.email}
          onChange={handleOnChange}
          placeholder="Email address"
          required
        />

        <input
          name="password"
          value={form.password}
          type="password"
          minLength="7"
          onChange={handleOnChange}
          placeholder="Create password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
