package sio.realisationslam;

public class DefensePassive extends Defense {

    public DefensePassive(String nom, int reductionPhysique, int reductionMagique, int niveauRequis) {
        super(nom, reductionPhysique, reductionMagique, niveauRequis);

    }


    @Override
    public void activer(Personnage cible, Hero lanceur) {
        // Defense passive toujours active, reduction appliquée automatiquement
        System.out.println(getNom() + " active ! Réduction de " + getReductionPhysique() + " dégâts physiques.");
        switch (lanceur.getClasse()) {
            case GUERRIER:
                if (lanceur.getPv() < 40 ){
                    setReductionPhysique(getReductionPhysique() + 10);
                };
                break;
            case ARCHER:
                if (lanceur.getPv() > 70 ){
                    setReductionPhysique(getReductionPhysique() + 15);
                };
                break;
            case MAGE:
                if (lanceur.getPv() < 30 ){
                    setReductionPhysique(getReductionPhysique() + getReductionMagique());
                };
                break;
        }
    }
}