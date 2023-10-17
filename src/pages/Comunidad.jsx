import "../index.css";
import PostHome from "../components/PostHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/TextArea";

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
  }, []);
  return (
    <div>
      <TextArea></TextArea>
      {token && <PostHome />}
    </div>
  );
}

export default Comunidad;
