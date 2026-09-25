import {Code, User , Briefcase} from "lucide-react";


export const AboutMe = () => {

    return (
        <section id="about" className="py-24 px-4 relative">
                {" "}
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        À propos de <span className="text-primary">moi</span>
                    </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">

                            <h3 className="text-2xl font-semibold"> Un jeune développeur passionné par la programmation </h3>

                            <p className="text-muted-foreground">
                                Grâce à mes deux années en BTS SIO, j'ai pu prendre conscience de ce que je voulais réaliser. 
                                J'ai pu me spécialiser dans la création de sites et d'applications, ce qui m'a permis d'apprendre différents langages comme HTML/CSS, JavaScript, Java, React ou encore PHP. 
                                Je réalise des sites responsifs, accessibles et des applications web performantes en utilisant des technologies modernes. 
                                J'ai créé mon auto-entreprise après ma première année pour mettre en pratique ce que j'ai appris, me lancer un défi, mais aussi pour gagner en expérience.
                            </p>

                            <p className="text-muted-foreground">
                                Si vous avez des opportunités de stage, des idées de projets ou même un site que vous souhaitez réaliser, je suis à votre disposition.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Contactez-moi
                                </a>

                                <a href="/cv.pdf" download="CV_Ilerioluwa_Olayode.pdf" className="px-6 py-2 rounded-full border-primary hover:bg-primary/10 transition-colors duration-300">
                                    Télécharger mon CV
                                </a>


                            </div>

                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 ">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Développement web </h4>

                                        <p className="text-muted-foreground">
                                            Création de sites responsifs et d'applications web avec des frameworks modernes.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 ">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Formation BTS SIO </h4>

                                        <p className="text-muted-foreground">
                                            Bases solides en algorithmique, gestion de bases de données et architecture d'applications web.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 ">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Services freelance </h4>

                                        <p className="text-muted-foreground">
                                            Conception et réalisation de projets web pour particuliers et entreprises via mon auto-entreprise.
                                        </p>

                                    </div>
                                </div>
                            </div>


                    </div>
                </div>

            </div>

        </section>
    

    );

};