import "../index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Publish from "../components/Publish";

function Comunidad() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const _token = localStorage.getItem("token");

    if (!_token) {
      navigate("/");
      return;
    }
    setToken(_token);
  }, [navigate]);
  return (
    <div>
      {token && <Publish />}
    </div>
  );
}

export default Comunidad;
