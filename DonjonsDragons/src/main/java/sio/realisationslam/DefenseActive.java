package sio.realisationslam;

public class DefenseActive extends Defense{
    private boolean estActive;

    public DefenseActive(String nom, int reductionPhysique, int reductionMagique, int niveauRequis) {
        super(nom, reductionPhysique, reductionMagique, niveauRequis);
        this.estActive = false;
    }

    @Override
    public void activer(Personnage cible, Hero lanceur) {
        if (!this.estActive){
            setReductionPhysique(getReductionPhysique() * 2);
            System.out.println("Le bouclier est activé");
            this.estActive = true;
        }
        if (this.estActive){
            System.out.println("Le bouclier est deja activé");
        }
    }
}
