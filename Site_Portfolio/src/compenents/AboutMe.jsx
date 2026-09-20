import {Code, User , Briefcase} from "lucide-react";


export const AboutMe = () => {

    return (
        <section id="about" className="py-24 px-4 relative">
                {" "}
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">

                            <h3 className="text-2xl font-semibold"> Un jeune developpeur passionné de programmation </h3>

                            <p className="text-muted-foreground">
                                Grâce à mes deux ans en BTS SIO, j'ai pus prendre conscience de ce que je voulais réaliser.
                                J'ai pus me spécialiser dans la création de site ou d'applications , où j'ai pus apprendre differents langages comme HTML/CSS, JavaScript, Java, React ou bien même PHP.
                                Je réalise des sites responsives, accessible et des applications web performant en utilisant des technologies modern. 
                                J'ai ouvert mon auto-entreprise apres ma premiere année pour mettre en pratique ce que j'ai appris, me lancer en un defi mais aussi pour gagner en experience.
                            </p>

                            <p className="text-muted-foreground">
                                Si vous avez des stages, idées de projet ou meme un site que vous souhaitiez réaliser je suis présent à n'importe quel moment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Contactez-moi
                                </a>

                                <a href="/cv.pdf" download="CV_Ilerioluwa_Olayode.pdf" className="px-6 py-2 rounded-full border-primary hover:bg-primary/10 transition-colors duration-300">
                                    Telecharger mon CV
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
                                        <h4 className="font-semibold text-lg"> Developpement web </h4>

                                        <p className="text-muted-foreground">
                                            Création d'un site responsives et d'application web avec des frameworks moderne.
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
                                        <h4 className="font-semibold text-lg"> Services Freelance </h4>

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