// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";// importacion cambios LUIS PELIGRO!!!

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfsjEfow_cNF4Q6Y8w4qV6F4FZivrSo-o",
  authDomain: "ecoamigos-b27b7.firebaseapp.com",
  projectId: "ecoamigos-b27b7",
  storageBucket: "ecoamigos-b27b7.appspot.com",
  messagingSenderId: "733853918959",
  appId: "1:733853918959:web:414181453ad616d2af5d1a",
};

const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "es";

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

//pruebas

//const user = firebase.auth().currentUser;
//const name = user.displayName;
//const email = user.email; 





function RegistroGoogle() {
  const registerWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;

        const userData = {
          name: name,
          email: email,
          photoURL: photoURL,
        };

        axios.post("http://localhost:8080/usuario/guardar", userData)
          .then((response) => {
            console.log("Datos del usuario enviados al backend:", response.data);
          })
          .catch((error) => {
            console.error("Error al enviar datos al backend:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
      });
  }

  // Resto del código de RegistroGoogle

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


//pruebas
  export { auth, provider };//no borrar 