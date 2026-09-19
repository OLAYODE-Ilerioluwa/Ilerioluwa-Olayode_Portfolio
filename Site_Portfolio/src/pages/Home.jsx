import { ThemeToggle } from "../compenents/ThemeToggle.jsx";
import { AuroraBackground } from "../compenents/AuroraBackground.jsx";
import { NavBar } from "../compenents/NavBar.jsx";

export const Home = () => {
  return (
    <AuroraBackground showRadialGradient={true} animationSpeed={15}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
        {/*Theme toggle*/}
        <ThemeToggle />

        {/*Background animation*/}

        {/*Navigation*/}
        <NavBar />
        {/*Main content*/}

        {/*Footer*/}
      </div>
    </AuroraBackground>
  );
};