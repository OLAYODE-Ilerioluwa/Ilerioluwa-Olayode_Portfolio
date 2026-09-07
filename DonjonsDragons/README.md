# ⚔️ Donjons & Dragons — Jeu RPG JavaFX

> Jeu de combat au tour par tour développé en Java avec JavaFX — Projet BTS SIO SLAM

---

## 📖 Présentation

**Donjons & Dragons** est un jeu de rôle textuel avec interface graphique où le joueur incarne un héros qui doit affronter des ennemis de plus en plus puissants dans un donjon.

- 🧙 3 classes de héros : Guerrier, Mage, Archer
- 👾 3 types d'ennemis aléatoires + Boss tous les 5 tours
- ⚔️ Système de combat au tour par tour
- 📈 Progression avec montée de niveau et déblocage de compétences

---

## 🛠️ Technologies

| Technologie | Version |
|-------------|---------|
| Java | 17 |
| JavaFX | 17 |
| IntelliJ IDEA | 2024 |

---

## 🏗️ Architecture des classes

```
Personnage (abstract)
├── Hero
└── Ennemi
    └── Boss

Attaque (abstract)
├── AttaquePhysique   → Niveau 1
├── AttaqueMagique    → Niveau 3
└── AttaqueSpeciale   → Niveau 6

Defense (abstract)
├── DefensePassive    → Niveau 1
├── DefenseActive     → Niveau 4
└── DefenseMagique    → Niveau 8

Potion
Tour (static)
Genre (enum)
Classe (enum)
```

---

## 🎮 Comment jouer

### Lancer le jeu
1. Cloner le dépôt
2. Ouvrir dans IntelliJ IDEA
3. Lancer `HelloApplication.java`

### Déroulement
1. **Écran de création** — Entrez votre nom, choisissez votre genre et votre classe
2. **Combat** — Affrontez les ennemis en choisissant vos actions à chaque tour

### Actions disponibles
| Bouton | Description |
|--------|-------------|
| ⚔️ Attaquer | Choisir parmi vos attaques débloquées |
| 🛡️ Défense | Activer une technique défensive |
| 🧪 Potion | Utiliser une potion (effet 2 tours) |
| 🔍 Analyser | Voir les stats de l'ennemi |

---

## 📊 Système de progression

| Niveau | Déblocage |
|--------|-----------|
| 1 | AttaquePhysique + DefensePassive |
| 3 | AttaqueMagique |
| 4 | DefenseActive |
| 6 | AttaqueSpeciale |
| 8 | DefenseMagique |

- **XP** : chaque ennemi vaincu donne de l'XP selon sa difficulté
- **Niveau** : monter de niveau à 100 XP, l'XP excédentaire est conservée
- **Boss** : apparaît tous les 5 tours avec une capacité spéciale

---

## 🧠 Concepts OOP utilisés

- **Héritage** : `Hero` et `Ennemi` héritent de `Personnage`, `Boss` hérite de `Ennemi`
- **Abstraction** : `Personnage`, `Attaque` et `Defense` sont des classes abstraites
- **Encapsulation** : attributs `private`/`protected`, accès via getters/setters
- **Polymorphisme** : `executer()` et `activer()` surchargées dans chaque sous-classe
- **Enum** : `Genre` et `Classe` pour les valeurs fixes
- **Static** : `Tour.compteur` pour le compteur global de tours

---

## 📁 Structure du projet

```
src/
└── sio/realisationslam/
    ├── HelloApplication.java      # Point d'entrée
    ├── HelloController.java       # Contrôleur combat
    ├── CreationController.java    # Contrôleur création personnage
    ├── Personnage.java            # Classe abstraite parente
    ├── Hero.java
    ├── Ennemi.java
    ├── Boss.java
    ├── Attaque.java
    ├── AttaquePhysique.java
    ├── AttaqueMagique.java
    ├── AttaqueSpeciale.java
    ├── Defense.java
    ├── DefensePassive.java
    ├── DefenseActive.java
    ├── DefenseMagique.java
    ├── Potion.java
    ├── Tour.java
    ├── Genre.java
    └── Classe.java

resources/
└── sio/realisationslam/
    ├── hello-view.fxml
    └── creation-personnage.fxml
```

---

## 👤 Auteur

**Ilérioluwa OLAYODE** — BTS SIO SLAM — Lycée LeRebours, Paris
