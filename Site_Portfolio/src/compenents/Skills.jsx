import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";

const skills = [

    // Frontend
    {name: "HTML/CSS",  category: "frontend",logo:FaHtml5, level_text: "Efficace"},
    {name: "JavaScript",  category: "frontend",logo:IoLogoJavascript, level_text: "Débutant Avancé"},
    {name: "React",  category: "frontend",logo:FaReact, level_text: "Débutant Avancé"},
    {name: "Next.js",  category: "frontend",logo:SiNextdotjs, level_text: "Débutant Avancé"},
    {name: "Tailwind CSS",  category: "frontend",logo:RiTailwindCssFill, level_text: "Débutant Anvancé"},

    // Backend
    {name: "Java", level: 85, category: "backend",logo:FaJava, level_text: "Compétent"},
    {name: "PHP", level: 70, category: "backend",logo:FaPhp, level_text: "Débutant Avancé"},
    {name: "Python", level: 95, category: "backend",logo:FaPython, level_text: "Efficace"},
    {name: "SQL", level: 75, category: "backend",logo:TbSql, level_text: "Compétent"},
    {name: "SpringBoot", level: 70, category: "backend",logo:SiSpringboot, level_text: "Débutant Avancé"},

    // Tools
    {name: "Git/GitHub", level: 95, category: "tools",logo:FaGithub, level_text: "Efficace"},
    {name: "Docker", level: 70, category: "tools",logo:FaDocker, level_text: "Compétent"},
    {name: "Figma", level: 70, category: "tools",logo:FaFigma, level_text: "Débutant Avancé"},
    {name: "VS Code", level: 85, category: "tools",logo:VscCode, level_text: "Efficace"},
    {name: "IntelliJ", level: 80, category: "toolsd",logo:SiIntellijidea, level_text: "Comptétent"},

]

const categories = ["all", "frontend", "backend","tools"];
export const Skills = () => {

    const [activeCategory, setActiveCategory] = useState ("all");
    const filteredSkills = skills.filter(
        (skill)=> activeCategory == "all" || skill.category == activeCategory
    );
    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3x md:text-4xl font-bold mb-12 text-center">
                    Mes <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key)=> (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                             <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>   
                            
                            <div className="flex justify-center">
                                <skill.logo size={50}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level_text}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};