import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './pages/NavBar'
import About from './pages/About'
import Actus from './pages/Actus'
import Login from './pages/Login'
import Footer from './pages/Footer'
import Inscription from './pages/Inscription'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage){
      case 'home':return <Home/>
      case 'about': return <About/>
      case 'actus': return <Actus/>
      case 'login': return <Login setCurrentPage={setCurrentPage}/>
      case 'inscription': return <Inscription />
    }
  }
  return (
    <div className="min-h-screen bg-white prompt">
  

      {/* Affichage de la page d'accueil */}
      <main>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </main>
    </div>
  )
}

export default App