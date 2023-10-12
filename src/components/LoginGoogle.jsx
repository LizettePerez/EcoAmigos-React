import '../index.css';
import { auth, provider, signInWithPopup } from '../api/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import RegistroGoogle from './RegistroGoogle';
import { useNavigate } from 'react-router-dom';


function LoginGoogle() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        console.log('Token de acceso de Google:', token);
        console.log('Usuario autenticado:', user);

        navigate.push('/post');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error:', errorCode, errorMessage, credential, email);
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
      < RegistroGoogle />
    </div>

  );
}

export default LoginGoogle;