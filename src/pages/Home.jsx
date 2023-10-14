import Bienvenida from '../components/Bienvenida';
import 'tailwindcss/tailwind.css';
import '../index.css';
import Reciclaje from '../components/Reciclaje';
import Contacto from '../components/contacto';

function Home() {
  return (
    <>
      <Bienvenida />
      <Reciclaje />
      <Contacto />
    </>
  )
}

export default Home;