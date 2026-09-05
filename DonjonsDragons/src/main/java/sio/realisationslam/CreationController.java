package sio.realisationslam;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Scene;

import java.io.IOException;
import java.util.Random;

public class CreationController {
    @FXML
    private TextField nomField;
    @FXML
    private Label selectionText;

    private Genre genreChoisi;
    private Classe classeChoisie;

    @FXML
    protected void choisirMale() {
        this.genreChoisi = Genre.MALE;
        mettreAJourSelection();
    }

    @FXML
    protected void choisirFemelle() {
        this.genreChoisi = Genre.FEMELLE;
        mettreAJourSelection();
    }

    @FXML
    protected void choisirAutre() {
        this.genreChoisi = Genre.AUTRE;
        mettreAJourSelection();
    }


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
        if (genreChoisi != null) texte += "Genre : " + genreChoisi;
        if (classeChoisie != null) texte += " | Classe : " + classeChoisie;
        selectionText.setText(texte);
    }

    @FXML
    protected void commencer() {
        // on vérifiera que tout est rempli puis on lancera le combat
        if (!nomField.getText().isEmpty() && genreChoisi != null && classeChoisie != null) {
            Random random = new Random();
            int pv = random.nextInt(200) + 100; // entre 80 et 120
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
                // Créer le héros
                Hero hero = new Hero(nomField.getText(), pv,attaque,defense, genreChoisi, classeChoisie);

                // Ouvrir la fenêtre de combat
                FXMLLoader loader = new FXMLLoader(getClass().getResource("hello-view.fxml"));
                Stage stage = new Stage();
                stage.setScene(new Scene(loader.load()));

                // Passer le héros au controller de combat
                HelloController controller = loader.getController();
                controller.setHero(hero);

                // Fermer la fenêtre de création
                Stage stageActuel = (Stage) nomField.getScene().getWindow();
                stageActuel.close();

                // Afficher la fenêtre de combat
                stage.show();

            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            selectionText.setText("Veuillez remplir tous les champs !");
        }



    }
    @FXML
    protected void CreerEnnemi() throws IOException {
        // Ouvrir la fenêtre de combat
        FXMLLoader loader = new FXMLLoader(getClass().getResource("creation-ennemi.fxml"));
        Stage stage = new Stage();
        stage.setScene(new Scene(loader.load()));


        // Fermer la fenêtre de création
        Stage stageActuel = (Stage) nomField.getScene().getWindow();
        stageActuel.close();

        // Afficher la fenêtre de combat
        stage.show();


    }
}