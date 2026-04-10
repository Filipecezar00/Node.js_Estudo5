import { useState } from "react";
import { TextField, Button } from "@mui/material";
import style from "./page.module.css";

export default function Auth() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);

  const handleChangeFormType = () => {
    if (formType === "login") {
      setFormType("signup");
    } else {
      setFormType("login");
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (formType === "login") {
    return (
      <div className={style.authPageContainer}>
        <h1>Login</h1>
        <button onClick={handleChangeFormType}>
          Don't you have an account? Click Here
        </button>
        <form onSubmit={handleSubmitForm}>
          <TextField
            required
            label="Email"
            type="email"
            name="email"
            onChange={handleFormDataChange}
          />
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            onChange={handleFormDataChange}
          ></TextField>

          <button type="submit">Login:</button>
        </form>
      </div>
    );
  }

  if (formType === "signup") {
    return (
      <div className={style.authPageContainer}>
        <h1>SignUp</h1>
        <button onClick={handleChangeFormType}>
          Already have an account? Click here
        </button>
        <TextField
          required
          label="Fullname"
          type="fullname"
          name="fullname"
          onChange={handleFormDataChange}
        />
        <TextField
          required
          label="Email"
          type="email"
          name="email"
          onChange={handleFormDataChange}
        />
        <TextField
          required
          label="Password"
          type="password"
          name="password"
          onChange={handleFormDataChange}
        />
        <TextField
          required
          label="Confirm password"
          type="password"
          name="ConfirmPassword"
          onChange={handleFormDataChange}
        />
        <button type="submit">Signup</button>
      </div>
    );
  }
}
