import "../index.css";
import { auth, provider } from "../api/firebase.config";
import CommunityImg from "../assets/community.png";
import RegistroGoogle from "./RegistroGoogle";
import { useNavigate } from "react-router-dom";
import axios from 'axios';//luis prueba 


import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function LoginGoogle() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        console.log("Token de acceso de Google:", token);
        localStorage.setItem("token", token);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("profilePic", user.photoURL);
        console.log("Usuario autenticado:", user);

       
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;

        const userData = {
          usuarioToken: token,
          usuarioNombre: displayName,
          usuarioEmail: email,
          usuarioImagen: photoURL,
        };

        axios.post("http://localhost:8080/usuario/guardar", userData)
        .then((response) => {
          console.log("Datos del usuario enviados al backend:", response.data);
        })
        .catch((error) => {
          console.error("Error al enviar datos al backend:", error);
        });
        

        navigate("/comunidad"); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Error:", errorCode, errorMessage, credential, email);
      });
  };
 

  
  return (
    <div>
      <section className="container communityContainer" id="login">
        <section className="communityImg">
          <img
            src={CommunityImg}
            alt="communityImg"
            className="communityImg imgAside"
          />
        </section>
        <section className="formCommunity">
          <div>
            <button
              onClick={signInWithGoogle}
              type="button"
              className="login-with-google-btn"
            >
              Iniciar sesión con Google
            </button>
            <RegistroGoogle />
          </div>
        </section>
      </section>
    </div>
  );
}


export default LoginGoogle;
