package sio.realisationslam;

public abstract class Personnage {
    protected String nom;
    protected int pv;
    protected int attaque;
    protected int defense;

    public Personnage(String nom, int pv, int attaque, int defense) {
        this.nom = nom;
        this.pv = pv;
        this.attaque = attaque;
        this.defense = defense;
    }

    public String getNom() {
        return nom;
    }

    public int getPv() {
        return pv;
    }

    public int getAttaque() {
        return attaque;
    }

    public int getDefense() {
        return defense;
    }

    protected int attaquer(){
        return attaque;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPv(int pv) {
        this.pv = pv;
    }

    public void setAttaque(int attaque) {
        this.attaque = attaque;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    protected void recevoirDegat(int degats, int reduction) {
        this.pv = this.pv - ( degats - reduction);
        if (this.pv <0 )
            this.pv = 0;
    }
}
