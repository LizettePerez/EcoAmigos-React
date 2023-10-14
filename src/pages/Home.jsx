import Bienvenida from "../components/Bienvenida";
import "tailwindcss/tailwind.css";
import "../index.css";
import Reciclaje from "../components/Reciclaje";
import LoginGoogle from "../components/LoginGoogle";

function Home() {
  return (
    <>
      <Bienvenida />
      <LoginGoogle />
      <Reciclaje />
    </>
  );
}

export default Home;
