import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import style from "./page.module.css";
import authServices from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

export default function Auth() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({});
  const { login, signup, authLoading } = authServices();
  const navigate = useNavigate();

  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (authData) {
      return navigate("/profile");
    }
  }, []);

  const handleChangeFormType = () => {
    setFormData({});
    setFormType(formType === "login" ? "signup" : "login");
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    switch (formType) {
      case "login":
        console.log("Iniciando chamada de login...");
        const res = await login(formData);

        console.log("Resposta recebida do hook:", res);

        if (res && res.success) {
          console.log("Sucesso!, Redirecionando");
          navigate("/profile");
        } else {
          console.log("Falha: A condição 'res.success' não foi atendida.");
        }

        break;
      case "signup":
        if (!formData?.password || !formData?.confirmpassword) {
          console.log("Por favor, preencha as senhas");
          return;
        }
        if (formData.password !== formData.confirmpassword) {
          console.log("Passwords do not match");
          return;
        }
        await signup(formData);
        setFormType("login");
        break;
    }
  };

  if (authLoading) {
    return <h1>Loading...</h1>;
  }

  if (formType === "login") {
    return (
      <div className={style.authPageContainer}>
        <h1>Login</h1>
        <Button onClick={handleChangeFormType}>
          Don't you have an account? Click Here
        </Button>
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

          <button type="submit">
            <LuLogIn /> Login
          </button>
        </form>
      </div>
    );
  }

  if (formType === "signup") {
    return (
      <div className={style.authPageContainer}>
        <h1>SignUp</h1>
        <Button onClick={handleChangeFormType}>
          Already have an account? Click here
        </Button>
        <form onSubmit={handleSubmitForm}>
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
            name="confirmpassword"
            onChange={handleFormDataChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}
