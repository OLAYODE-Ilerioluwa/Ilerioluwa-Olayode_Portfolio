import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {

    return (
    
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}

        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Studio-NVXL, All rights reserved.{" "}</p>

        <a href="#accueil" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"> 
            <ArrowUp />
        </a>

        <Link
            to="/mentions-legales"
            className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
        >
            Mentions légales
        </Link>
    
    </footer>
    );
};