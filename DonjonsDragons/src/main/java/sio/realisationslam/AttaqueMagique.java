package sio.realisationslam;

public class AttaqueMagique extends Attaque{
    private String element;
    private int manaCout;

    public AttaqueMagique(String nom, int degats, int niveauRequis, String element, int manaCout) {
        super(nom, degats, niveauRequis);
        this.element = element;
        this.manaCout = manaCout;
    }

    public String getElement() {
        return element;
    }

    public int getManaCout() {
        return manaCout;
    }


    public void executer(Personnage cible, Hero lanceur) {
        lanceur.setMana(lanceur.getMana() - manaCout); // le héros perd du mana
        cible.recevoirDegat(getDegats(), 0); // l'ennemi perd des pv
    }
}
