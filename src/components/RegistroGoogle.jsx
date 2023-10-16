import "../index.css";
import { auth, provider } from "../api/firebase.config";
//import {connection} from "../api/server" // agregar api mysql""
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

function RegistroGoogle() {
  const navigate = useNavigate();
  const registerWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const token = user.stsTokenManager.accessToken;
        const name = result.user.displayName;
        const profilePic = result.user.photoURL;

        console.log("Token de acceso de Google:", token);
        console.log("Usuario registrado y autenticado:", user);

        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("profilePic", profilePic);

        navigate.push("/comunidad");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <button
        onClick={registerWithGoogle}
        type="button"
        className="login-with-google-btn"
      >
        Registrarse con Google
      </button>
    </div>
  );
}

export default RegistroGoogle;
