import './App.css'
import Bienvenida from './components/Bienvenida';
import Header from './components/Header'
import 'tailwindcss/tailwind.css';
import './index.css';
import Reciclaje from './components/Reciclaje';

function App() {

  return (
    <>
      <Header />
      <main>
        <Bienvenida />
        <Reciclaje />
      </main>

    </>
  )
}

export default App
