
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

export const Parcours = () =>{
    return (
        <section id="parcours" >
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Mon <span className="text-primary">Parcours</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Vous suivrez mon parcours jusqu'à maintenant</p>

                <div className="flex flex-col items-start gap-5 " >
                    {parcours.map((parcour) => (
                        <div key={parcour.id} style={{backgroundColor: "#ffffff"}} className="relative z-10 p-6 rounded-lg shadow-xs w-full">
                            <div className="text-left px-3 py-2">
                                <span className="text-xl font-semibold flex items-center gap-x-5 text-primary"><IoIosArrowDroprightCircle size={20} />{parcour.title}</span>
                            </div>
                            <div className="text-left px-4 underline italic text-foreground py-1">
                                {parcour.period}
                            </div>
                            <div className="text-left px-4 flex items-center gap-x-5 py-1 ">
                                <MdOutlineLocationOn size={20}/>{parcour.lieu}
                            </div>
                            <div className="text-left px-4 py-2 ">
                                {parcour.description}
                            </div>



                        </div>
                    ))}

                </div>
            </div>
            
            

        </section>

    );

};