import './App.css'
import Bienvenida from './components/Bienvenida';
import Header from './components/Header'
import 'tailwindcss/tailwind.css';
import './index.css';
import Reciclaje from './components/Reciclaje';
import Eventos from './components/Eventos';

function App() {

  return (
    <>
      <Header />
      <main>
        <Bienvenida />
        <Reciclaje />
        <Eventos />
      </main>

    </>
  )
}

export default App
