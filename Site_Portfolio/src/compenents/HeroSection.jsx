import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Bonjour !</span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-1"> {" "}Je me présente, je m'appelle </span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">{" "}Ilerioluwa Olayode</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Je suis étudiant en BTS SIO 2e année et je suis passionné par l'informatique. 
                    En recherche de stage pour clôturer mon année, je suis aussi en quête de nouveaux défis, comme la création d'un jeu ou la réalisation de sites pour des clients.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4">
                    <a href="#projets" className="cosmic-button">
                        Découvrez mes projets
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
};