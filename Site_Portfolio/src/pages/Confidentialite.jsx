import { LegalLayout, LegalSection } from "../compenents/LegalLayout";
import { legal } from "../data/legal";

export const Confidentialite = () => (
    <LegalLayout title="Politique de confidentialité">
        <LegalSection title="Responsable du traitement">
            <p>{legal.nom}, joignable à l'adresse {legal.email}.</p>
        </LegalSection>

        <LegalSection title="Données collectées">
            <p>
                Les seules données personnelles que je collecte sont celles que vous saisissez dans le formulaire de contact : votre nom, votre adresse e-mail et votre message.
                Elles me sont transmises par e-mail.
            </p>
        </LegalSection>

        <LegalSection title="Finalité et base légale">
            <p>
                Ces données servent uniquement à répondre à votre demande. Le traitement repose sur votre consentement, que vous donnez en envoyant le formulaire.
                Elles ne sont ni revendues, ni utilisées à des fins de prospection sans votre accord.
            </p>
        </LegalSection>

        <LegalSection title="Durée de conservation">
            <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 12 mois après notre dernier échange.
            </p>
        </LegalSection>

        <LegalSection title="Vos droits">
            <p>
                Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données, ainsi que du droit de retirer votre consentement à tout moment.
                Pour les exercer, écrivez à {legal.email}.
            </p>
            <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (cnil.fr).
            </p>
        </LegalSection>

        <LegalSection title="Cookies et stockage local">
            <p>
                Ce site n'utilise aucun cookie de suivi, de mesure d'audience ou de publicité.
                Votre choix de thème clair ou sombre est enregistré uniquement dans votre navigateur, il n'est jamais transmis.
            </p>
        </LegalSection>
    </LegalLayout>
);