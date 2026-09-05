package sio.realisationslam;

public class Potion {
    private String type;
    private int valeur;

    public Potion(String type, int valeur) {
        this.type = type;
        this.valeur = valeur;
    }

    public String getType() {
        return type;
    }

    public int getValeur() {
        return valeur;
    }

    public void appliquerEffet(Hero lanceur) {
        switch (this.type) {
            case "soin":
                lanceur.setPv(lanceur.getPv() + valeur);
                break;
            case "attaque":
                lanceur.setAttaque(lanceur.getAttaque() + valeur);
                break;
            case "defense":
                lanceur.setDefense(lanceur.getDefense() + valeur);
                break;
        }
    }
}
