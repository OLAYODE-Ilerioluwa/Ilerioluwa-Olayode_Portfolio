package sio.realisationslam;

public class Ennemi extends Personnage{
    private Classe classe;
    private boolean isBoss;
    private int xpRecompense;

    public Ennemi(String nom, int pv, int attaque, int defense,  Classe uneClasse, boolean unBoss, int gainXp) {
        super(nom, pv, attaque, defense);
        this.classe = uneClasse;
        this.isBoss = unBoss;
        this.xpRecompense = gainXp;
    }

    public Classe getClasse() {
        return classe;
    }

    public void setClasse(Classe classe) {
        this.classe = classe;
    }

    public void setBoss(boolean boss) {
        isBoss = boss;
    }

    public void setXpRecompense(int xpRecompense) {
        this.xpRecompense = xpRecompense;
    }

    public boolean isBoss() {
        return isBoss;
    }

    public int getXpRecompense() {
        return xpRecompense;
    }
}
