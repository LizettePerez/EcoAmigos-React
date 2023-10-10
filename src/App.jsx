import './App.css'
import Header from './components/Header'
import 'tailwindcss/tailwind.css';
import './index.css';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      < Footer />

    </>
  )
}

export default App
