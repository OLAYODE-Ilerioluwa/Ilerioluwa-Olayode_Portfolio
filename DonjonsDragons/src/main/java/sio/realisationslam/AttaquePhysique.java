package sio.realisationslam;

public class AttaquePhysique extends Attaque{
    private boolean critique;
    private String malus;

    public AttaquePhysique(String nom, int degats, int niveauRequis, boolean critique, String malus) {
        super(nom, degats, niveauRequis);
        this.critique = critique;
        this.malus = malus;
    }


    public void executer(Personnage cible,Hero lanceur) {
        int degatsFinaux = lanceur.getAttaque();
        if (this.critique) {
            degatsFinaux = degatsFinaux * 2;
        }
        cible.recevoirDegat(degatsFinaux,0);
    }
}
