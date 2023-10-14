import './App.css'
import Header from './components/Header'
import 'tailwindcss/tailwind.css';
import './index.css';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Comunidad from './pages/Comunidad'
import Post from './pages/Post'
import Eventos from './pages/Eventos';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comunidad' element={<Comunidad />} />
          <Route path='/post' element={<Post />} />
          <Route path='/eventos' element={<Eventos />} />
        </Routes>
      </main>
      < Footer />
    </>
  )
}

export default App
