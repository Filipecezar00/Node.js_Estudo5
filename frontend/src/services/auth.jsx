import { useState } from "react";

export default function authServices() {
  const [authLoading, setAuthLoading] = useState(false);

  const url = "http://localhost:3000/auth";

  const login = async (formData) => {
    setAuthLoading(true);

    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success && result.body.token) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: result.body.token,
            user: result.body.user,
          }),
        );
      }
      return result;
    } catch (error) {
      console.log(error);
      return { success: false };
    } finally {
      setAuthLoading(false);
    }
  };
  const logout = (form) => {
    localStorage.removeItem("auth");
  };

  const signup = async (formData) => {
    setAuthLoading(true);
    try {
      const response = await fetch(`${url}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  };

  return { signup, login, logout, authLoading };
}
