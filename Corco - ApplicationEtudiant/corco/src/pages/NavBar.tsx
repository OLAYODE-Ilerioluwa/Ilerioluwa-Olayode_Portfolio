

export default function Navbar({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
    return (
        <nav>
            <h1> Cor<span>co</span></h1>
            <ul>
                <li onClick={() => setCurrentPage('home')}>Accueil</li>
                <li onClick={() => setCurrentPage('about')}>A propos de nous </li>
                <li onClick={() => setCurrentPage('actus')}>Actus</li>
                <li onClick={() => setCurrentPage('login')}> Connexion</li>
            </ul>
        </nav>
    )
}