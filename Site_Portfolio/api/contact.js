import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "Champs manquants" });
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "iolayode@outlook.fr",
            replyTo: email,
            subject: `Nouveau message de ${firstName} ${lastName}`,
            html: `<p><strong>Nom :</strong> ${firstName} ${lastName}</p><p><strong>Email :</strong> ${email}</p><p><strong>Message :</strong></p><p>${message}</p>`,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Échec de l'envoi" });
    }
}