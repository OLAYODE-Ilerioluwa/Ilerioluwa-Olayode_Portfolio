
import { AuroraBackground } from "../compenents/AuroraBackground.jsx";
import { NavBar } from "../compenents/NavBar.jsx";
import { Footer} from "../compenents/Footer.jsx"


export const Mention = () => {
  return (
    <AuroraBackground showRadialGradient={true} animationSpeed={15}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
        {/*Theme toggle*/}
        

        {/*Background animation*/}

        {/*Navigation*/}
        <NavBar />
        {/*Main content*/}
        <main className="pt-24 px-6 max-w-3xl mx-auto pb-16">
            <h1 className="text-2xl font-bold mb-8">Mentions légales</h1>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Éditeur du site</h2>
                <p>
                    Le présent site est édité par Ilerioluwa OLAYODE, entrepreneur
                    individuel exerçant sous le régime de la micro-entreprise, sous le
                    nom commercial Studio NVXL, immatriculé sous le numéro SIRET
                    922 940 051 00027.
                </p>
                <p>
                    Contact : studio.nvxl@gmail.com — 06 33 23 15 91
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Hébergement</h2>
                <p>
                    Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
                    CA 91789, États-Unis.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Propriété intellectuelle</h2>
                <p>
                    L'ensemble des contenus présents sur ce site (textes, images, logos,
                    code source) est la propriété exclusive de Studio NVXL, sauf mention
                    contraire. Toute reproduction, représentation ou diffusion, totale
                    ou partielle, sans autorisation préalable est interdite.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Données personnelles</h2>
                <p>
                    Les informations recueillies via le formulaire de contact sont
                    utilisées uniquement pour répondre à votre demande et ne sont
                    transmises à aucun tiers. Conformément au Règlement Général sur la
                    Protection des Données (RGPD), vous disposez d'un droit d'accès, de
                    rectification et de suppression de vos données, que vous pouvez
                    exercer en écrivant à studio.nvxl@gmail.com.
                </p>
            </section>

            <section>
                <h2 className="text-lg font-semibold mb-2">Responsabilité</h2>
                <p>
                    L'éditeur s'efforce d'assurer l'exactitude des informations
                    diffusées sur ce site, mais ne saurait être tenu responsable
                    d'erreurs, d'omissions ou de l'indisponibilité temporaire du
                    service.
                </p>
            </section>


        </main>
        {/*Footer*/}
        <Footer/>
      </div>
    </AuroraBackground>
  );
};