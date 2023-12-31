import { useState } from "react";
import axios from "axios";

export default function Text() {
  const [postText, setPostText] = useState("");

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePostSubmit = () => {
    if (postText.trim() === "") {
      console.log("El texto del post está vacío. No se enviará la solicitud.");
      return;
    }

    const userEmail = localStorage.getItem("email");
    console.log("Email del usuario:", userEmail);

    axios
      .post("http://localhost:8080/post/guardar", {
        postTexto: postText,
        //email: localStorage.getItem("email"),
      })
      .then((response) => {
        console.log("Post del usuario enviados con éxito: ", response.data);
      })
      .catch((error) => {
        console.log("Error al enviar datos: ", error);
      });
  };

  return (
    <div className="post">
      <textarea
        placeholder="Escribe tu post aquí"
        value={postText}
        onChange={handlePostTextChange}
      />
      <button onClick={handlePostSubmit} className="communityBtn">
        Publicar
      </button>
    </div>
  );
}
