package sio.realisationslam;

import javafx.animation.PauseTransition;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;
import javafx.util.Duration;

import java.util.Random;

public class HelloController {

    @FXML private Label bouclierLabel;
    @FXML private DefenseMagique defenseMagique;
    @FXML private Label heroDefense;
    @FXML private Label heroAttaque;
    @FXML private HBox boutonsPotion;
    @FXML private Button btnPotion1;
    @FXML private Button btnPotion2;
    @FXML private Button btnPotion3;
    @FXML private Defense defenseActive;
    @FXML private HBox boutonsDefense;
    @FXML private Button btnDefense1;
    @FXML private Button btnDefense2;
    @FXML private Button btnDefense3;
    @FXML private HBox boutonsAction;
    @FXML private HBox boutonsAttaque;
    @FXML private Button btnAttaque2;
    @FXML private Button btnAttaque3;
    @FXML private Button btnAttaque1;
    @FXML private Label heroNom;
    @FXML private Label heroPv;
    @FXML private Label heroMana;
    @FXML private Label heroNiveau;
    @FXML private Label ennemiNom;
    @FXML private Label ennemiPv;
    @FXML private Label tourLabel;
    @FXML private TextArea logCombat;

    private int degatsFinaux = 0;
    private int bouclierActif = 0;
    private int toursDefense = 0;
    private int attaqueBase;
    private int defenseBase;
    private int toursPotion = 0;
    private Hero hero;
    private Boutique boutiqueActuel;
    private Ennemi ennemiActuel;

    public void setHero(Hero hero) {
        this.hero = hero;
        btnAttaque1.setText(hero.getAttaques().get(0).getNom());
        btnAttaque2.setText("🔒 Attaque Magique");
        btnAttaque3.setText("🔒 Attaque Spéciale");
        attaqueBase = hero.getAttaque();
        defenseBase = hero.getDefense();
        hero.getPotions().add(new Potion("soin", 30));
        hero.getPotions().add(new Potion("attaque", 10));
        hero.getPotions().add(new Potion("defense", 10));
        genererEnnemi();
        mettreAJourAffichage();
    }

    private void genererBoutique() {
        /// Creation d'une boutique qui saffiche quand l'ennemi est mort et que le tour est d'un divisible de 2
        if ((Tour.getComteur() % 2 == 0) == (ennemiActuel.getPv() == 0)) {
            Random random = new Random();
            int ch = random.nextInt(3);
            switch (ch) {
                case 0:
                    boutiqueActuel = new Boutique(hero.getPotions().get(ch).getType(), 10, 5);
            }

        }
    }

    private void genererEnnemi() {
        if (Tour.getComteur() % 5 == 0) {
            // générer un boss
            ennemiActuel = new Boss("Boss",200,35,0,Classe.GUERRIER,750,Classe.ARCHER,"Deluge Astral");
        } else {
            // générer un ennemi normal
            Random random = new Random();
            int choice = random.nextInt(5);
            switch (choice){
                case 0 :
                    ennemiActuel = new Ennemi("Goblin", 70, 20, 10, Classe.GUERRIER, false, 150);
                    break;
                case 1 :
                    ennemiActuel = new Ennemi("Squelette", 50, 15, 0, Classe.GUERRIER, false, 150);
                    break;
                case 2 :
                    ennemiActuel = new Ennemi("Troll", 80, 20, 20, Classe.GUERRIER, false, 150);
                    break;
                case 3 :
                    ennemiActuel = new Ennemi("Dragon", 150, 20, 0, Classe.GUERRIER, false, 150);
                    break;
                 }
        }


    }

    private void mettreAJourAffichage() {
        heroNom.setText("Nom : " + hero.getNom());
        heroPv.setText("PV : " + hero.getPv());
        heroMana.setText("Mana : " + hero.getMana());
        heroNiveau.setText("Niveau : " + hero.getNiveau());
        ennemiNom.setText("Nom : " + ennemiActuel.getNom());
        ennemiPv.setText("PV : " + ennemiActuel.getPv());
        tourLabel.setText("Tour : " + Tour.getComteur());
        heroAttaque.setText("Attaque : " + hero.getAttaque());
        heroDefense.setText("Defense : " +  hero.getDefense());
        bouclierLabel.setText("Bouclier : " + bouclierActif);
        if (hero.getAttaques().size() >= 2) {
            btnAttaque2.setDisable(false);
            btnAttaque2.setText(hero.getAttaques().get(1).getNom());
        }
        if (hero.getAttaques().size() >= 3) {
            btnAttaque3.setDisable(false);
            btnAttaque3.setText(hero.getAttaques().get(2).getNom());
        }
        if (hero.getAttaques().size() >= 2) {
            AttaqueMagique attMagique = (AttaqueMagique) hero.getAttaques().get(1);
            if (hero.getMana() < attMagique.getManaCout()) {
                btnAttaque2.setDisable(true);
            }
        }
        if (hero.getNiveau() >= 4) {
            btnDefense2.setDisable(false);
        }
        if (hero.getNiveau() >= 6) {
            btnDefense3.setDisable(false);
        }
    }

    private void ajouterLog(String message) {
        logCombat.appendText(message + "\n");
    }

    @FXML
    protected void attaquer() {
        boutonsAttaque.setVisible(true);
    }
    @FXML
    protected void choisirAttaque1() {
        hero.getAttaques().get(0).executer(ennemiActuel,hero);
        mettreAJourAffichage();


        switch (hero.getClasse()){
            case GUERRIER:
                ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " avec un coup d'épée et inflige " + hero.getAttaque() + " dégâts");
                break;
            case ARCHER:
                ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " en envoyant une fleche rapide et inflige " + hero.getAttaque() + " dégâts");
                break;
            case MAGE:
                ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " en projectant une vague d'energie et inflige " + hero.getAttaque() + " dégâts");
                break;
        }

        boutonsAttaque.setVisible(false);
        if (!verifierEtatCombat()) {
            PauseTransition pause = new PauseTransition(Duration.seconds(1));
            pause.setOnFinished(e -> tourEnnemi());
            pause.play();
        }
        Tour.incrementer();
    }

    protected void tourEnnemi(){
        if(ennemiActuel.getPv() <= 0) return;
        int reduction = (defenseActive != null) ? defenseActive.getReductionPhysique() : 0;
        reduction += hero.getDefense();
        int reductiontotale = reduction ;

        if (bouclierActif > 0) {
            bouclierActif -= ennemiActuel.getAttaque();
            ajouterLog("Le bouclier absorbe " + ennemiActuel.getAttaque() + " dégâts !");
            if (bouclierActif <= 0) {
                bouclierActif = 0;
                ajouterLog("Le bouclier est brisé !");
            }
        } else {
            // attaque normale
            degatsFinaux = Math.max(1,  ennemiActuel.getAttaque()-reductiontotale);
            hero.recevoirDegat(degatsFinaux, 0);
            ajouterLog(ennemiActuel.getNom() + " attaque " + hero.getNom() + " avec un coup et inflige " + degatsFinaux + " dégâts");

        }


        if (ennemiActuel instanceof Boss && Tour.getComteur() % 3 == 0) {
            Boss boss = (Boss) ennemiActuel;
            ajouterLog("⚠ " + boss.getNom() + " utilise " + boss.getCapaciteSpeciale() + " et inflige des dégâts supplémentaires !");
            hero.recevoirDegat(40, reduction);
            mettreAJourAffichage();
        }
        if (toursDefense > 0){
            toursDefense -- ;
            if (toursDefense == 0){
                hero.setDefense(defenseBase);
                mettreAJourAffichage();
                ajouterLog("L'effet du bouclier se dissipe");
            }
        }
        if (toursPotion > 0) {
            toursPotion--;
            if (toursPotion == 0) {
                hero.setAttaque(attaqueBase);
                hero.setDefense(defenseBase);
                mettreAJourAffichage();
                ajouterLog("L'effet de la potion se dissipe !");
            }
        }
        mettreAJourAffichage();
        if (hero.getAttaques().size() >= 3) {
            AttaqueSpeciale attSpeciale = (AttaqueSpeciale) hero.getAttaques().get(2);
            attSpeciale.diminuerCooldown();
        }
        verifierEtatCombat();
    }

    protected boolean verifierEtatCombat(){
        if (hero.getPv() <= 0 ){
            ajouterLog("Game Over");
            PauseTransition pause = new PauseTransition(Duration.seconds(3));
            pause.setOnFinished(e -> {
                try {
                    // Ouvrir création personnage
                    FXMLLoader loader = new FXMLLoader(getClass().getResource("creation-personnage.fxml"));
                    Stage stage = new Stage();
                    stage.setScene(new Scene(loader.load()));
                    stage.show();

                    // Fermer la fenêtre de combat
                    Stage stageActuel = (Stage) boutonsAction.getScene().getWindow();
                    stageActuel.close();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            });
            pause.play();
            return true;
        }
        if (ennemiActuel.getPv() <= 0){
            ajouterLog("L'ennemi est vaincu "+ "\n" + "Vous passez au niveau suivant ");
            hero.gagnerXp(ennemiActuel.getXpRecompense());
            boutonsAction.setDisable(true);
            ajouterLog("L'ennemi est vaincu ! Préparez-vous pour le prochain combat...");
            PauseTransition pause = new PauseTransition(Duration.seconds(5));
            pause.setOnFinished(e -> {
                genererBoutique();
                genererEnnemi();
                mettreAJourAffichage();
                boutonsAction.setDisable(false);
                boutonsAction.setVisible(true);});
            pause.play();
            return true;
        }
        return false;
    }
    @FXML
    protected void choisirAttaque2() {
        AttaqueMagique attMagique = (AttaqueMagique) hero.getAttaques().get(1);
        if (hero.getMana() >= attMagique.getManaCout()) {

            hero.getAttaques().get(1).executer(ennemiActuel, hero);
            mettreAJourAffichage();

            switch (hero.getClasse()){

                case GUERRIER:
                    ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " en puissant dans son energie pour enflammer sa lame et inflige " + attMagique.getDegats() + " dégâts");
                    break;

                case ARCHER:
                    ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " avec une fleche glacial qu'il a canalisé et inflige " + attMagique.getDegats() + " dégâts");
                    break;

                case MAGE:
                    ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " avec une pluie de lame et inflige " + attMagique.getDegats() + " dégâts");
                    break;

            }

            boutonsAttaque.setVisible(false);
            if (!verifierEtatCombat()) {
                PauseTransition pause = new PauseTransition(Duration.seconds(1));
                pause.setOnFinished(e -> tourEnnemi());
                pause.play();
            }
            Tour.incrementer();
        } 
    }

    @FXML
    protected void choisirAttaque3() {
        AttaqueSpeciale attSpeciale = (AttaqueSpeciale) hero.getAttaques().get(2);
        if (attSpeciale.getToursRestant() == 0) {
            // tout ton code existant ici
            attSpeciale.executer(ennemiActuel,hero);
            mettreAJourAffichage();
            switch (hero.getClasse()){
                case GUERRIER:
                    ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " en faisant appel à la faveur d'Athéna pour enflammer son coeur et inflige " + (int)(attSpeciale.getDegats()*attSpeciale.getMultiplicateur()) + " dégâts");
                    break;
                case ARCHER:
                    ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " apres une grande concentration sa fleche imprimé d'une grande énérgie et inflige " + (int)(attSpeciale.getDegats()*attSpeciale.getMultiplicateur()) + " dégâts");
                    break;
                case MAGE:
                    ajouterLog(hero.getNom() + " attaque " + ennemiActuel.getNom() + " avec la foudre unique de Zeus et inflige " + (int)(attSpeciale.getDegats()*attSpeciale.getMultiplicateur()) + " dégâts");
                    break;
            }
            boutonsAttaque.setVisible(false);
            if (!verifierEtatCombat()) {
                PauseTransition pause = new PauseTransition(Duration.seconds(1));
                pause.setOnFinished(e -> tourEnnemi());
                pause.play();
            }
        } else {
            ajouterLog("⏳ Attaque spéciale en cooldown !");
            boutonsAttaque.setVisible(false);
            PauseTransition pause = new PauseTransition(Duration.seconds(1));
            pause.setOnFinished(e -> tourEnnemi());
            pause.play();
        }
        Tour.incrementer();
    }

    @FXML
    protected void defendre() {
        boutonsDefense.setVisible(true);
    }

    @FXML
    protected void choisirDefense1(){
        switch (hero.getClasse()){
            case GUERRIER:
                DefensePassive defenseGuerrier = new DefensePassive("Second souffle", 0, 0, 1);
                defenseActive = defenseGuerrier;
                defenseGuerrier.activer(ennemiActuel,hero);
                ajouterLog(hero.getNom() + " active Second souffle et booste sa défense de " + defenseGuerrier.getReductionPhysique());
                break;
            case ARCHER:
                DefensePassive defenseArcher = new DefensePassive("Protection du vent", 0, 0, 1);
                defenseActive = defenseArcher;
                defenseArcher.activer(ennemiActuel,hero);
                ajouterLog(hero.getNom() + " active Protection du vent et booste sa défense de " + defenseArcher.getReductionPhysique());
                break;
            case MAGE:
                DefensePassive defenseMage = new DefensePassive("Faveur des esprits", 0, 0, 1);
                defenseActive = defenseMage;
                defenseMage.activer(ennemiActuel,hero);
                ajouterLog(hero.getNom() + " active Faveur des esprits et booste sa défense de " + defenseMage.getReductionPhysique());
                break;
        }
        boutonsDefense.setVisible(false);

        PauseTransition pause = new PauseTransition(Duration.seconds(1));
        pause.setOnFinished(e -> tourEnnemi());
        pause.play();
        Tour.incrementer();
    }

    @FXML
    protected void choisirDefense2(){
        hero.setDefense(hero.getDefense() * 2);
        toursDefense = 2;
        ajouterLog(hero.getNom() + " active son bouclier et double sa défense !");
        mettreAJourAffichage();
        boutonsDefense.setVisible(false);
        PauseTransition pause = new PauseTransition(Duration.seconds(1));
        pause.setOnFinished(e -> tourEnnemi());
        pause.play();
        Tour.incrementer();

    }

    @FXML
    protected void choisirDefense3(){
        switch (hero.getClasse()){
            case GUERRIER:
                bouclierActif = 50;
                ajouterLog("Le bouclier magique a été active");
                break;
            case ARCHER:
                bouclierActif = 70;
                ajouterLog("Le bouclier magique a été active");
                break;
            case MAGE:
                bouclierActif =100;
                ajouterLog("Le bouclier magique a été active");
                break;
        }


        boutonsDefense.setVisible(false);
        Tour.incrementer();
        PauseTransition pause = new PauseTransition(Duration.seconds(1));
        pause.setOnFinished(event -> tourEnnemi());
        pause.play();
    }



    @FXML
    protected void utiliserPotion() {
        boutonsPotion.setVisible(true);
    }

    @FXML
    protected void choisirPotion1() {
        ajouterLog("Vous buvez la gourde du brave qui vous soigne de + 30 pv");
        boutonsPotion.setVisible(false);
        hero.getPotions().get(0).appliquerEffet(hero);
        mettreAJourAffichage();
        PauseTransition pause = new PauseTransition(Duration.seconds(1));
        pause.setOnFinished(e ->tourEnnemi());
        pause.play();
        Tour.incrementer();

    }

    @FXML
    protected void choisirPotion2(){
        ajouterLog("Vous buvez la gourde du hero qui vous rends plus puissant de + 10 ");
        boutonsPotion.setVisible(false);
        hero.getPotions().get(1).appliquerEffet(hero);
        toursPotion = 2;
        mettreAJourAffichage();
        PauseTransition pause = new PauseTransition(Duration.seconds(1));
        pause.setOnFinished(e ->tourEnnemi());
        pause.play();
        Tour.incrementer();

    }

    @FXML
    protected void choisirPotion3(){
        ajouterLog("Vous buvez la gourde d'Atlas qui vous protege de + 10 ");
        boutonsPotion.setVisible(false);
        hero.getPotions().get(2).appliquerEffet(hero);
        toursPotion = 2;
        mettreAJourAffichage();
        PauseTransition pause = new PauseTransition(Duration.seconds(1));
        pause.setOnFinished(e ->tourEnnemi());
        pause.play();
        Tour.incrementer();

    }




    @FXML
    protected void analyser() {
        ajouterLog("Votre ennemi est un " + ennemiActuel.getNom() + " avec une puissance de "+ ennemiActuel.getAttaque() + " et une defense de " + ennemiActuel.getDefense() + " provenant de la classe " + ennemiActuel.getClasse() );
    }
}