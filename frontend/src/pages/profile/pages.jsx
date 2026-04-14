import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (!authData) {
      return navigate("/auth");
    }
  }, []);

  const handleLogout = () => {};

  return (
    <>
      <h1>{authData?.user?.fullname}</h1>
      <h3>{authData?.user?.email}</h3>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
