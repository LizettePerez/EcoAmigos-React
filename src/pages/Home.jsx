import Bienvenida from '../components/Bienvenida';
import 'tailwindcss/tailwind.css';
import '../index.css';
import Reciclaje from '../components/Reciclaje';
import Eventos from '../components/Eventos';
import Contacto from '../components/contacto';

function Home() {
  return (
    <>
      <Bienvenida />
      <Reciclaje />
      <Eventos />
      <Contacto />
    </>
  )
}

export default Home;