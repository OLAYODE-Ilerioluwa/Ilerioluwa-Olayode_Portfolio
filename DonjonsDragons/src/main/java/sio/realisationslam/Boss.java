package sio.realisationslam;

public class Boss extends Ennemi{
    private Classe classeSecondaire;
    private String capaciteSpeciale;

    public Boss(String nom, int pv, int attaque, int defense, Classe uneClasse, int gainXp,Classe secondClasse,String techSpeciale) {
        super(nom, pv, attaque, defense, uneClasse, true, gainXp);
        this.classeSecondaire = secondClasse;
        this.capaciteSpeciale = techSpeciale;
    }

    public void setClasseSecondaire(Classe classeSecondaire) {
        this.classeSecondaire = classeSecondaire;
    }

    public void setCapaciteSpeciale(String capaciteSpeciale) {
        this.capaciteSpeciale = capaciteSpeciale;
    }

    public Classe getClasseSecondaire() {
        return classeSecondaire;
    }

    public String getCapaciteSpeciale() {
        return capaciteSpeciale;
    }
}
