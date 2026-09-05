package sio.realisationslam;

public class Main {
    public static void main(String[] args) {
        // Hero
        Hero hero = new Hero("Arthur", 150, 20, 10, Genre.MALE, Classe.GUERRIER);

        // Ennemi
        Ennemi ennemi = new Ennemi("Goblin", 50, 10, 5, Classe.GUERRIER, false, 30);

        // Attaque
        AttaquePhysique attaque = new AttaquePhysique("Coup d'épée", 20, 1, false, "aucun");
        attaque.executer(ennemi, hero);
        System.out.println("PV Goblin après attaque : " + ennemi.getPv());

        // Potion
        Potion potion = new Potion("soin", 30);
        hero.setPv(50); // on blesse le héros
        potion.appliquerEffet(hero);
        System.out.println("PV Arthur après potion : " + hero.getPv());

        // Tour
        Tour.incrementer();
        System.out.println("Tour actuel : " + Tour.getComteur());
    }
}