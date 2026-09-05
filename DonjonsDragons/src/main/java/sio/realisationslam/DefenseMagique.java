package sio.realisationslam;

public class DefenseMagique extends Defense{
    private int bouclierMana;

    public DefenseMagique(String nom, int reductionPhysique, int reductionMagique, int niveauRequis, int bouclierMana) {
        super(nom, reductionPhysique, reductionMagique, niveauRequis);
        this.bouclierMana = bouclierMana;
    }

    public void absorberDegats(int degats) {
        if (bouclierMana > 0) {
            bouclierMana = bouclierMana - degats;
            System.out.println("Bouclier absorbe " + degats + " dégâts !");
        }
    }
    @Override
    public void activer(Personnage cible, Hero lanceur) {
        System.out.println("Bouclier magique activé ! " + bouclierMana + " points de bouclier.");
    }
}
