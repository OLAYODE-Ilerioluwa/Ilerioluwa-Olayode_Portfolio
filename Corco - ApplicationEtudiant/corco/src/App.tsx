function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Ton Header / Navigation ici */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-wider">
          DO <span className="text-indigo-500">IT</span>
        </h1>

        <nav>
          <ul className="flex items-center space-x-8 font-medium">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Accueil</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Analyse</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Option</a></li>
          </ul>
        </nav>
      </header>

      {/* Le reste de ton application */}
      <main className="p-8">
        <h2 className="text-2xl font-semibold">Bienvenue sur mon application !</h2>
      </main>
    </div>
  )
}

export default App