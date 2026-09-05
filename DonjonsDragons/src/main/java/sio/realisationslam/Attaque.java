package sio.realisationslam;

public abstract class Attaque {
    private String nom;
    private int degats;
    private int niveauRequis;

    public Attaque(String nom, int degats, int niveauRequis) {
        this.nom = nom;
        this.degats = degats;
        this.niveauRequis = niveauRequis;
    }

    public String getNom() {
        return nom;
    }

    public int getDegats() {
        return degats;
    }

    public int getNiveauRequis() {
        return niveauRequis;
    }

    public abstract void executer(Personnage cible, Hero lanceur);
}
