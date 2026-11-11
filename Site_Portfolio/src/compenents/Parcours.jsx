
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const parcours = [

    {
        id:3,
        title: "Lycée Le Rebours - BTS SIO option SLAM",
        lieu: "Paris",
        period: "2025 - 2027",
        description : "Un BTS qui m'a permis de consolider de bonnes bases, tant techniques que théoriques, et où j'ai pu me fixer des objectifs pour me dépasser."
    },
    {
        id:2,
        title: "UVSQ en Yvelines",
        lieu: "Versailles",
        period: "2021 - 2024",
        description : "Après une année en double licence Bio/Info et deux années de licence simple Info, j'ai décidé de prendre une année de réflexion pour savoir ce que je voulais faire."
    },
    {
        id:1,
        title: "Lycée Jean Racine - BAC Géneral",
        lieu: "Montdidier",
        period: "2019 - 2021",
        description : "3 ans au lycée Jean Racine, Bac obtenu avec les spécialités : NSI, SVT et l'option : Maths."
    },
    
    
]

export const Parcours = () => {
    return (
        <section id="parcours" className="py-24">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Mon <span className="text-primary">Parcours</span>
                </h2>
                <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
                    Vous suivrez mon parcours jusqu'à maintenant
                </p>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-[18px] top-4 bottom-4 w-px bg-border" />

                    <div className="flex flex-col gap-8">
                        {parcours.map((parcour) => (
                            <div key={parcour.id} className="relative pl-14">
                                <span className="absolute left-0 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                                    <IoIosArrowDroprightCircle size={20} />
                                </span>

                                <div className="gradient-border  p-6 text-left shadow-xs">
                                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                        <h3 className="text-xl font-semibold">{parcour.title}</h3>
                                        <span className="w-fit shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                                            {parcour.period}
                                        </span>
                                    </div>

                                    <div className="mt-2 flex items-center gap-x-2 text-sm text-muted-foreground">
                                        <MdOutlineLocationOn size={18} className="text-primary" />
                                        {parcour.lieu}
                                    </div>

                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        {parcour.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};