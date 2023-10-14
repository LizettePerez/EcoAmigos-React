import "../index.css";
import { auth, signInWithPopup, provider } from "../api/firebase.config";
import { useNavigate } from "react-router-dom";

function RegistroGoogle() {
  const navigate = useNavigate();
  const registerWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const token = user.stsTokenManager.accessToken;
        console.log("Token de acceso de Google:", token);
        console.log("Usuario registrado y autenticado:", user);
        navigate.push("/post");
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

    /* <div>
      <button onClick={registerWithGoogle}>Registrarse con Google</button>
    </div> */
  );
}

export default RegistroGoogle;
