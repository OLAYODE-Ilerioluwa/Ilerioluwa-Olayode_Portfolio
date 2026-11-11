import { Briefcase, Building2, ExternalLink, MapPin } from "lucide-react";

const entreprises = [
    {
        id: 1,
        name: "Oratis IA",
        type: "Stage",
        role: "Développeur Python",
        lieu: "Paris - à distance",
        description: "Stage consacré à la collecte et à la structuration de données d'agents immobiliers au Mexique, avec des scrapers développés en Python.",
        stats: [
            { value: "11", label: "scrapers" },
            { value: "≈ 3 600", label: "profils collectés" },
        ],
        tags: ["Python", "BeautifulSoup", "Scrapy", "CSV"],
        url: null,
    },
    {
        id: 2,
        name: "Studio NVXL",
        type: "Freelance",
        role: "Développeur web",
        lieu: "Île-de-France",
        description: "Mon activité de création de sites web sur mesure pour les professionnels, du site vitrine aux fonctionnalités de réservation et de gestion de contenu.",
        stats: [],
        tags: ["HTML", "CSS", "JavaScript", "Firebase","React", "Tailwind","Vercel"],
        url: null,
    },
    {
        id: 3,
        name: "ACDI TOGO/FRANCE",
        type: "Stage",
        status: "À venir",
        role: "Stagiaire développeur",
        lieu: "Paris - à distance",
        description: "Prochain stage de ma formation, qui me permettra de poursuivre ma montée en compétences en développement.",
        stats: [],
        tags: [],
        url: null,
    },
];

export const Entreprise = () => {
    return (
        <section id="entreprises" className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Mon <span className="text-primary">Expérience</span>
                </h2>
                <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
                    Les stages et activités professionnelles qui complètent ma formation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {entreprises.map((entreprise) => (
                        <article
                            key={entreprise.id}
                            className="gradient-border card-hover flex flex-col p-6 text-left shadow-xs"
                        >
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                        <Building2 size={22} />
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-semibold leading-tight">{entreprise.name}</h3>
                                        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <Briefcase size={14} className="text-primary" />
                                            {entreprise.role}
                                        </p>
                                    </div>
                                </div>
                                <span className="flex shrink-0 items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                                    {entreprise.status && (
                                        <span className="h-2 w-2 animate-pulse-subtle rounded-full bg-primary" />
                                    )}
                                    {entreprise.status ? `${entreprise.type} · ${entreprise.status}` : entreprise.type}
                                </span>
                            </div>

                            {entreprise.lieu && (
                                <p className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <MapPin size={14} className="text-primary" />
                                    {entreprise.lieu}
                                </p>
                            )}

                            <p className="mb-5 leading-relaxed text-muted-foreground">
                                {entreprise.description}
                            </p>

                            {entreprise.stats.length > 0 && (
                                <div className="mb-5 grid grid-cols-2 gap-3">
                                    {entreprise.stats.map((stat) => (
                                        <div key={stat.label} className="rounded-lg bg-secondary px-4 py-3">
                                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {entreprise.tags.length > 0 && (
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {entreprise.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {entreprise.url && (
                                <a
                                    href={entreprise.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-primary hover:text-primary"
                                >
                                    <ExternalLink size={16} /> Voir le site
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};