import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

export const LegalLayout = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-3xl px-4 py-16 text-left">
                <a
                    href="https://www.studio-nvxl.fr/"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft size={16} /> Retour au portfolio
                </a>
                <h1 className="mb-12 text-3xl font-bold md:text-4xl">{title}</h1>
                <div className="space-y-10">{children}</div>
            </div>
        </div>
    );
};

export const LegalSection = ({ title, children }) => (
    <section>
        <h2 className="mb-3 text-xl font-semibold">{title}</h2>
        <div className="space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
);