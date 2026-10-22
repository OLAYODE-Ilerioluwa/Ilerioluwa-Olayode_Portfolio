

export default function Navbar({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
    return (
        <nav className="flex justify-between w-full bg-emerald-600 p-3   ">
            <h1 className="p-1 cursor-pointer italic font-bold text-white "> Cor<span className="text-emerald-900">co</span></h1>
            <ul className="flex justify-center space-x-6 pr-10 font-semibold  ">
                <li className="p-1 cursor-pointer hover:scale-105 text-white " onClick={() => setCurrentPage('home')}>Accueil</li>
                <li className="p-1 cursor-pointer hover:scale-105 text-white" onClick={() => setCurrentPage('about')}>A propos de nous </li>
                <li className="p-1 cursor-pointer hover:scale-105 text-white" onClick={() => setCurrentPage('actus')}>Actus</li>
                <li className=" rounded border border-emerald-900 text-sm text-emerald-600 p-1 bg-white cursor-pointer transform transition duration-300 hover:bg-emerald-500 hover:text-white hover:scale-105  " onClick={() => setCurrentPage('login')}> Connexion</li>
            </ul>
        </nav>
    )
}