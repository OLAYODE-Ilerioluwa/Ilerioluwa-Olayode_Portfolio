package sio.realisationslam;

public class AttaqueSpeciale extends Attaque{
    private float multiplicateur;
    private int cooldown;
    private int toursRestant;

    public AttaqueSpeciale(String nom, int degats, int niveauRequis, float multiplicateur, int cooldown, int toursRestant) {
        super(nom, degats, niveauRequis);
        this.multiplicateur = multiplicateur;
        this.cooldown = cooldown;
        this.toursRestant = toursRestant;
    }

    public void diminuerCooldown() {
        if (this.toursRestant > 0) {
            this.toursRestant--;
        }
    }

    public float getMultiplicateur() {
        return multiplicateur;
    }

    public int getCooldown() {
        return cooldown;
    }

    public int getToursRestant() {
        return toursRestant;
    }

    public void setMultiplicateur(float multiplicateur) {
        this.multiplicateur = multiplicateur;
    }

    public void setCooldown(int cooldown) {
        this.cooldown = cooldown;
    }

    public void setToursRestant(int toursRestant) {
        this.toursRestant = toursRestant;
    }

    @Override
    public void executer(Personnage cible, Hero lanceur) {
        float degatSpeciaux =  getDegats()* this.multiplicateur;
        if (this.toursRestant == 0) {
            // attaque disponible
            cible.recevoirDegat((int) degatSpeciaux,0);
            this.toursRestant = this.cooldown; // on remet le compteur
        } else {
            // attaque pas disponible
            System.out.println("Attaque pas encore disponible !");
        }



    }
}
