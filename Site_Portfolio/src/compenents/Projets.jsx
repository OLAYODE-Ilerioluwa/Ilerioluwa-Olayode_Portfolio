import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";


const projets = [
    {
        id:1,
        title : "SY MOTORS ",
        description: "Un site web pour la vente de voiture en concession , réalisé avec WordPress",
        image:"/Projets/SyMotors/01.webp",
        tags: ["WordPress"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:2,
        title : "MexiGo ",
        description: "Un site web pour une agence de voyage , réalisé en HTML,CSS et JavaScript",
        image:"/Projets/MexiGo/01-accueil.webp",
        tags: ["HTML","CSS","JavaScript"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:3,
        title : "Yuki ",
        description: "Un site web d'un restaurant fictif , réalisé en HTML,CSS avec une base de données pour la reservation et un compte admin",
        image:"/Projets/Yuki/01-accueil.webp",
        tags: ["HTMl","CSS","Firebase","Figma"],
        demoUrl:"#",
        githubUrl:"#",
    }
]

export const Projets = () => {
    return (
        <section id="projets" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}Mes <span className="text-primary">Projets</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Vous trouverez ici certains de mes projets. Chaque projet a été fait par moi-même avec beaucoup d'attention aux détails.
                    D'autres projets seront ajoutés au fur et à mesure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projets.map((projet) => (
                        <div key={projet.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={projet.image}
                                    alt={projet.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projet.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{projet.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{projet.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={projet.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={projet.githubUrl}  target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <FaGithub size={20}/>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio">
                        Visiter mon Github <ArrowRight size={16} />
                    </a>

                </div>
            </div>
        </section>
    );
};