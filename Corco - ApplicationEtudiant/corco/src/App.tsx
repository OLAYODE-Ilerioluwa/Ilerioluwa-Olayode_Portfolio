import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './pages/NavBar'
import About from './pages/About'
import Actus from './pages/Actus'
import Login from './pages/Login'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage){
      case 'home':return <Home/>
      case 'about': return <About/>
      case 'actus': return <Actus/>
      case 'login': return <Login/>
    }
  }
  return (
    <div className="min-h-screen bg-slate-900 text-white">
  

      {/* Affichage de la page d'accueil */}
      <main>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
      </main>
    </div>
  )
}

export default App