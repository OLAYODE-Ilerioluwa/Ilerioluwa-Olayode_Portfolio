package sio.realisationslam;

public class Tour {
    private static int compteur = 1;

    public static int getComteur() {
        return compteur;
    }

    public static void incrementer(){
        compteur++;
    }
}
