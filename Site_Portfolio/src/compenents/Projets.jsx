import { ExternalLink, ArrowRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const projets = [
    {
        id: 1,
        title: "SY MOTORS",
        description: "Un site web pour la vente de voiture en concession, réalisé avec WordPress",
        image: "/Projets/SyMotors/01.webp",
        tags: ["WordPress"],
        demoUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/Site_SY-Motors",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/Site_SY-Motors",
    },
    {
        id: 2,
        title: "MexiGo",
        description: "Un site web pour une agence de voyage, réalisé en HTML, CSS et JavaScript",
        image: "/Projets/MexiGo/01-accueil.webp",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/Site_Mexigo",
    },
    {
        id: 3,
        title: "Yuki",
        description: "Un site web d'un restaurant fictif, réalisé en HTML, CSS avec une base de données pour la réservation et un compte admin",
        image: "/Projets/Yuki/01-accueil.webp",
        tags: ["HTML", "CSS", "Firebase", "Figma"],
        demoUrl: "#",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/Site_Yuki",
    },
    {
        id: 4,
        title: "Jeu de la Duellete",
        description: "Jeu Python de la duellete",
        image: "/Projets/Capture d'écran 2026-09-21 082324.png",
        tags: ["Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/JEU_LA_DUELLETE",
    },
    {
        id: 5,
        title: "Jeu du HERO",
        description: "Jeu en Python de combat entre un héros et un ennemi",
        image: "/Projets/Capture d'écran 2026-09-21 082410.png",
        tags: ["Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/JEU-HEROS",
    },
    {
        id: 6,
        title: "Scrapping_mexique",
        description: "Scrapping réalisé pour la validation d'acceptation de mon stage chez Oratis AI",
        image: "/Projets/Capture d'écran 2026-09-21 100037.png",
        tags: ["Python", "BeautifulSoup", "Scrapy", "CSV"],
        demoUrl: "#",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio/tree/main/EXERCICE-SOW",
    },
    {
        id: 7,
        title: "Hell of tower - RPG",
        description: "Réalisation d'un jeu en Java/JavaFX",
        image: "/Projets/slimev1.png",
        tags: ["Java/JavaFx"],
        demoUrl: "#",
        githubUrl: "https://github.com/OLAYODE-Ilerioluwa/2027SIO_IlerioluwaOLAYODE",
    },
    {
        id: 8,
        title: "Projet Neurolink",
        description: "Réalisation d'une application web",
        image: "/Projets/NeuroLink.png",
        tags: ["PHP", "Symfony", "Java", "JavaFx"],
        status: "En cours",
        demoUrl: "#",
        githubUrl: "https://github.com/Bakaryndi94/2026-NEUROLINK-JAVA-GRP7",
    },
    {
        id: 9,
        title: "Corco",
        description: "Application développée en TypeScript avec un back end en Java",
        image: "/Projets/Corco/01.webp",
        tags: ["TypeScript", "Java"],
        status: "En cours",
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const Projets = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="projets" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Mes <span className="text-primary">Projets</span>
                </h2>

                <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
                    Vous trouverez ici certains de mes projets. Chaque projet a été fait par moi-même avec beaucoup d'attention aux détails.
                    D'autres projets seront ajoutés au fur et à mesure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projets.map((projet) => (
                        <article
                            key={projet.id}
                            className="group gradient-border card-hover flex flex-col overflow-hidden text-left shadow-xs"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={projet.image}
                                    alt={projet.title}
                                    className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-105"
                                    onClick={() => setSelectedImage(projet.image)}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {projet.status && (
                                    <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                                        <span className="h-2 w-2 animate-pulse-subtle rounded-full bg-primary" />
                                        {projet.status}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                                    {projet.description}
                                </p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {projet.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center gap-3">
                                    {projet.githubUrl !== "#" && (
                                        <a
                                            href={projet.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
                                        >
                                            <FaGithub size={16} /> Code
                                        </a>
                                    )}
                                    {projet.demoUrl !== "#" && (
                                        <a
                                            href={projet.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
                                        >
                                            <ExternalLink size={16} /> Démo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/OLAYODE-Ilerioluwa/Ilerioluwa-Olayode_Portfolio"
                    >
                        Visiter mon Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Fermer"
                        >
                            <X size={28} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Vue agrandie"
                            className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};