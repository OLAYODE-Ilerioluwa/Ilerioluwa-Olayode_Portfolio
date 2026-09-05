package sio.realisationslam;


import java.util.ArrayList;

public class Hero extends Personnage{
    private Genre genre;
    private Classe classe;
    private int niveau;
    private int xp;
    private int mana;

    /// creation des pieces du hero
    private int piece;
    private ArrayList<Potion> potions;
    private ArrayList<Attaque> attaques;

    public Hero(String nom,int pv, int attaque,int defense,Genre leGenre,Classe laClasse){
        super(nom, pv, attaque, defense);
        this.genre = leGenre;
        this.classe = laClasse;
        this.niveau = 1;
        this.xp = 0;
        this.piece  = 0;
        this.potions = new ArrayList<Potion>();
        this.attaques = new ArrayList<Attaque>();
        switch (this.classe) {
            case GUERRIER:
                this.mana = 50;
                break;
            case ARCHER:
                this.mana = 75;
                break;
            case MAGE:
                this.mana = 150;
                break;
        }
        switch (this.classe){
            case GUERRIER:
                attaques.add(new AttaquePhysique("Coup d'épée",20,1,false,"aucun" ));
                break;
            case ARCHER:
                attaques.add(new AttaquePhysique("Fleche rapide",15,1,true,"aucun" ));
                break;
            case MAGE:
                attaques.add(new AttaquePhysique("Projection d'energie",30,1,false,"aucun" ));
                break;
        }

    }
    /// get et set des pieces
    public int getPiece() {
        return piece;
    }

    public void setPiece(int piece) {
        this.piece = piece;
    }

    public Classe getClasse() {
        return classe;
    }

    public int getMana() {
        return mana;
    }

    public ArrayList<Attaque> getAttaques() {
        return attaques;
    }

    public Genre getGenre() {
        return genre;
    }

    public int getXp() {
        return xp;
    }

    public ArrayList<Potion> getPotions() {
        return potions;
    }

    public int getNiveau() {
        return niveau;
    }

    public void setMana(int mana) {
        this.mana = Math.max(0,mana);
    }


    /// creation d'un moyen de depenser et de gagner de l'argent
    public void gagnerPc(int pc){
        this.piece = this.piece + pc;
    }

    public void depenserPc(int pc){
        if ((this.piece - pc) > 0 ){
            this.piece = this.piece - pc;
        }


    }
    public void gagnerXp(int xp){
        this.xp = this.xp + xp;
        if (this.xp >= 100){
            this.niveau = this.niveau + 1;
            this.xp = this.xp - 100;
            debloquerAttaque();
        }

    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public void setClasse(Classe classe) {
        this.classe = classe;
    }

    public void setNiveau(int niveau) {
        this.niveau = niveau;
    }

    public void setXp(int xp) {
        this.xp = xp;
    }

    public void setAttaques(ArrayList<Attaque> attaques) {
        this.attaques = attaques;
    }

    public void setPotions(ArrayList<Potion> potions) {
        this.potions = potions;
    }

    public void debloquerAttaque(){
        if (this.niveau >= 3) {
            switch (this.classe){
                case GUERRIER:
                    AttaqueMagique attaqueMagiqueGuerrier = new AttaqueMagique("Lame de feu", 40,3,"feu",30);
                    if (attaques.size() < 2) {
                        attaques.add(attaqueMagiqueGuerrier);
                    }
                    break;
                case ARCHER:
                    AttaqueMagique attaqueMagiqueArcher = new AttaqueMagique("Fleche glacial", 25,3,"Glace",10);
                    if (attaques.size() < 2) {
                        attaques.add(attaqueMagiqueArcher);
                    }
                    break;
                case MAGE:
                    AttaqueMagique attaqueMagiqueMage = new AttaqueMagique("Pluie de lame", 50,3,"Terre",60);
                    if (attaques.size() < 2) {
                        attaques.add(attaqueMagiqueMage);
                    }
                    break;
            }

        }
        if (this.niveau >= 6 ) {
            switch (this.classe){
                case GUERRIER:
                    AttaqueSpeciale attaqueSpecialeGuerrier = new AttaqueSpeciale("Lame d'Athena", 30,6,1.5f,3,0);
                    if (attaques.size() < 3) {
                        attaques.add(attaqueSpecialeGuerrier);
                    }
                    break;
                case ARCHER:
                    AttaqueSpeciale attaqueSpecialeArcher = new AttaqueSpeciale("Fleche divine", 35,6,2.0f,3,0);
                    if (attaques.size() < 3) {
                        attaques.add(attaqueSpecialeArcher);
                    }
                    break;
                case MAGE:
                    AttaqueSpeciale attaqueSpecialeMage = new AttaqueSpeciale("Foudre de Zeus", 60,6,1.2f,3,0);
                    if (attaques.size() < 3) {
                        attaques.add(attaqueSpecialeMage);
                    }
                    break;
            }


        }
        
    }




}
