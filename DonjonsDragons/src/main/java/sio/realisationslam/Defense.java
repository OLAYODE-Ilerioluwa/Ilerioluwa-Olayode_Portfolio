package sio.realisationslam;

public abstract class Defense {
    private String nom;
    private int reductionPhysique;
    private int reductionMagique;
    private int niveauRequis;

    public Defense(String nom, int reductionPhysique, int reductionMagique,int niveauRequis) {
        this.nom = nom;
        this.reductionPhysique = reductionPhysique;
        this.reductionMagique = reductionMagique;
        this.niveauRequis = niveauRequis;
    }

    public String getNom() {
        return nom;
    }

    public int getReductionPhysique() {
        return reductionPhysique;
    }

    public int getReductionMagique() {
        return reductionMagique;
    }

    public int getNiveauRequis() {
        return niveauRequis;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setReductionPhysique(int reductionPhysique) {
        this.reductionPhysique = reductionPhysique;
    }

    public void setReductionMagique(int reductionMagique) {
        this.reductionMagique = reductionMagique;
    }

    public void setNiveauRequis(int niveauRequis) {
        this.niveauRequis = niveauRequis;
    }

    public abstract void activer(Personnage cible, Hero lanceur);

}
