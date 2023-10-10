import './App.css'
import Bienvenida from './components/Bienvenida';
import Header from './components/Header'
import 'tailwindcss/tailwind.css';
import './index.css';
import Reciclaje from './components/Reciclaje';
import Eventos from './components/Eventos';
import Contacto from './components/contacto';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <Bienvenida />
        <Reciclaje />
        <Eventos />
        <Contacto />
      </main>
      < Footer />

    </>
  )
}

export default App
