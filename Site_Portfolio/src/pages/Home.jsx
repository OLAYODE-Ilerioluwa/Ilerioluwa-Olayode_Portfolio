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

export const Home = () => {
  return (
    <AuroraBackground showRadialGradient={true} animationSpeed={15}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
        {/*Theme toggle*/}
        

        {/*Background animation*/}

        {/*Navigation*/}
        <NavBar />
        {/*Main content*/}
        <main>
          <HeroSection/>
          <AboutMe/>
          <Parcours/>
          <Skills/>
          <Projets/>
          <Contact/>
        </main>
        {/*Footer*/}
        <Footer/>
      </div>
    </AuroraBackground>
  );
};