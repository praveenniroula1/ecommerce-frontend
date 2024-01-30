import React, { useState } from "react";
import { createUser } from "../helper/axiosHelper";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};
const Register = () => {
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
    createUser(form);
  };
  return (
    <div className="middle">
      <form onSubmit={handleOnSubmit}>
        <h4>Register Form</h4>

        <input
          name="fName"
          value={form.fName}
          onChange={handleOnChange}
          placeholder="First name"
          required
        />
        <input
          name="lName"
          value={form.lName}
          onChange={handleOnChange}
          placeholder="Last name"
          required
        />
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
        {/* <input
          name="confirmPassword"
          value={form.confirmPassword}
          type="password"
          onChange={handleOnChange}
          placeholder="Confirm password"
          required
        /> */}
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
