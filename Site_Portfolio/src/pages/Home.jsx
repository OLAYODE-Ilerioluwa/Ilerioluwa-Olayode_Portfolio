import { ThemeToggle } from "../compenents/ThemeToggle.jsx";
import { AuroraBackground } from "../compenents/AuroraBackground.jsx";
import { NavBar } from "../compenents/NavBar.jsx";
import {HeroSection} from "../compenents/HeroSection.jsx";
import {AboutMe} from "../compenents/AboutMe.jsx"
import { Skills } from "../compenents/Skills.jsx";
import { Projets } from "../compenents/Projets.jsx";
import { Contact } from "../compenents/Contact.jsx";
import { Footer} from "../compenents/Footer.jsx"
import { Parcours } from "../compenents/Parcours.jsx";
import { Entreprise } from "../compenents/Entreprise.jsx";


const useHash = () => {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const onChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onChange);
        return () => window.removeEventListener("hashchange", onChange);
    }, []);

    return hash;
};

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
      {/*Theme toggle*/}

      {/*Navigation*/}
      <NavBar />
      {/*Main content*/}
      <main>
        <HeroSection/>
        <AboutMe/>
        <Parcours/>
        <Entreprise/>
        <Skills/>
        <Projets/>
        <Contact/>
      </main>
      {/*Footer*/}
      <Footer/>
    </div>
  );
};

function App() {
    const hash = useHash();

    if (hash === "#mentions-legales") return <MentionsLegales />;
    if (hash === "#confidentialite") return <Confidentialite />;
    return <Home />;
}
