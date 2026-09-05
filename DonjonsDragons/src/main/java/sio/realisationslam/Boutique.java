package sio.realisationslam;

import java.util.ArrayList;


/// Creation de la boutique class
public class Boutique {
    private ArrayList<Potion> potion;
    private int prix;
    private int stock;

    public Boutique(String potion, int prix, int stock) {
        this.potion = new ArrayList<Potion>();
        this.prix = prix;
        this.stock = stock;
    }

    public ArrayList<Potion> getPotion() {
        return potion;
    }

    public void setPotion(ArrayList<Potion> potion) {
        this.potion = potion;
    }

    public int getPrix() {
        return prix;
    }

    public int getStock() {
        return stock;
    }



    public void setPrix(int prix) {
        this.prix = prix;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }


}
