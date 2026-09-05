package sio.realisationslam;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Scene;

import java.io.IOException;
import java.util.Random;


///  Creation de la classe de generation Ennemi
public class CreationEnnemi {
    public Label selectionText1;
    @FXML
    private TextField nomField;
    @FXML
    private Label selectionText;

    private Classe classeChoisie;

    @FXML
    protected void choisirGuerrier() {
        this.classeChoisie = Classe.GUERRIER;
        mettreAJourSelection();
    }

    @FXML
    protected void choisirMage() {
        this.classeChoisie = Classe.MAGE;
        mettreAJourSelection();
    }

    @FXML
    protected void choisirArcher() {
        this.classeChoisie = Classe.ARCHER;
        mettreAJourSelection();
    }

    private void mettreAJourSelection() {
        String texte = "";
        if (classeChoisie != null) texte += " | Classe : " + classeChoisie;
        selectionText.setText(texte);
    }

    @FXML
    protected void creer() {
        // on vérifiera que tout est rempli puis on lancera le combat
        if (!nomField.getText().isEmpty()  && classeChoisie != null) {
            Random random = new Random();
            int pv = random.nextInt(50)+ 100; // entre 80 et 120
            int attaque;
            int defense;

            switch (classeChoisie) {
                case GUERRIER:
                    attaque = 25;
                    defense = 25;
                    break;
                case ARCHER:

                    attaque = 30;
                    defense = 15;
                    break;
                case MAGE:
                    attaque = 40;
                    defense = 10;
                    break;
                default:
                    attaque = 15;
                    defense = 10;
                    break;
            }
            try {
                // Créer l'ennemi
                Random random2 = new Random();
                int XpChoix = random2.nextInt(200);
                int unBoss = random2.nextInt(2);
                if (unBoss == 1){
                    Ennemi ennemi = new Ennemi(nomField.getText(), pv,attaque,defense, classeChoisie,true, XpChoix);
                } else {
                    Ennemi ennemi = new Ennemi(nomField.getText(), pv,attaque,defense, classeChoisie,false, XpChoix);
                }

                selectionText1.setText("La créaction de votre ennemi a été faite !");








            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            selectionText.setText("Veuillez remplir tous les champs !");
        }


    }
    @FXML
    protected void retour() throws IOException {
        // Ouvrir la fenêtre de combat
        FXMLLoader loader = new FXMLLoader(getClass().getResource("creation-personnage.fxml"));
        Stage stage = new Stage();
        stage.setScene(new Scene(loader.load()));


        // Fermer la fenêtre de création
        Stage stageActuel = (Stage) nomField.getScene().getWindow();
        stageActuel.close();

        // Afficher la fenêtre de combat
        stage.show();


    }
}
