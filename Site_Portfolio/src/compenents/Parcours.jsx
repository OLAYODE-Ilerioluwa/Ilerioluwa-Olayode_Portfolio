import { Description } from "@radix-ui/react-toast";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const parcours = [
    {
        id:1,
        title: "Lycée Jean Racine - BAC Géneral",
        lieu: "Montdidier",
        period: "2019 - 2021",
        Description : "3 ans au lycée Jean Racine , Bac validé avec les specialités : NSI , Biologie et l'option : Maths."
    },
    {
        id:1,
        title: "UVSQ en Yvelines",
        lieu: "Versailles",
        period: "2021 - 2024",
        Description : "En faisant une année en double licence BIO/INFO et deux années de licence simple INFO , j'ai decidé de prendre une année pour savoir ce que je voulais faire."
    },
    {
        id:1,
        title: "Lycée Le Rebours - BTS SIO option SLAM",
        lieu: "Paris",
        period: "2025 - 2027",
        Description : "Un BTS qui m'a permis de consolider des bonnes bases que ce soit technique ou théorique, j'ai pus me fixer des objéctifs pour me depasser."
    },
]

export const Parcours = () =>{
    return (
        <section id="parcours">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Mon <span className="text-primary">Parcours</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Vous suivrez mon parcours jusqu'a maintenant</p>

                <div className="flex flex-col items-start gap-5 ">
                {parcours.map((parcour) => (
                    <div>
                        <div className="text-left px-2">
                            <span className="text-xl font-semibold flex items-center gap-x-5"><IoIosArrowDroprightCircle size={20} />{parcour.title}</span>
                        </div>
                        <div className="text-left px-2 underline italic">
                            {parcour.period}
                        </div>
                        <div className="text-left px-2 flex items-center gap-x-5">
                            <MdOutlineLocationOn size={20}/>{parcour.lieu}
                        </div>
                        <div className="text-left px-2">
                            {parcour.Description}
                        </div>



                    </div>
                ))}

                </div>
            </div>
            
            

        </section>

    );

};