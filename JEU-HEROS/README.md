# 🗡️ Jeu Héros

Un jeu de combat au tour par tour en ligne de commande, écrit en Python.

---

## Description

Vous incarnez un héros qui affronte un ennemi dans un duel. Chaque tour, vous choisissez entre **attaquer** ou **utiliser une potion**. L'ennemi contre-attaque automatiquement. Le combat se termine lorsque l'un des deux combattants tombe à 0 PV.

---

## Prérequis

- Python 3.x

Aucune bibliothèque externe n'est nécessaire (seul le module `random` de la bibliothèque standard est utilisé).

---

## Lancement

```bash
python Jeu_Heros.py
```

---

## Règles du jeu

### Conditions de départ

| Élément           | Héros | Ennemi |
|-------------------|-------|--------|
| Points de vie     | 50    | 50     |
| Potions           | 3     | 0      |

### À chaque tour

Vous saisissez l'une des deux commandes suivantes :

- `attaque` — Vous infligez entre **5 et 10 dégâts** à l'ennemi.
- `potion` — Vous récupérez entre **15 et 50 PV**, mais vous **sautez votre prochain tour** (l'ennemi attaque deux fois de suite).

> ⚠️ Si vous n'avez plus de potions, la commande `potion` déclenche automatiquement une attaque.

### Attaque de l'ennemi

L'ennemi attaque chaque tour et inflige entre **5 et 15 dégâts**.  
Si vous avez utilisé une potion, il attaque **une deuxième fois** dans le même tour.

### Fin de partie

- **Victoire** : les PV de l'ennemi tombent à 0 ou en dessous.
- **Défaite** : vos PV tombent à 0 ou en dessous.

---

## Exemple de partie

```
Bienvenue dans le Jeu Héros !
Vous commencez avec 50 points de vie, l'ennemi aussi.
...

--- Tour 1 ---
Vous avez 50 PV, l'ennemi a 50 PV. Potions restantes: 3
Potion ou Attaque ? attaque
Vous attaquez et infligez 8 dégâts. L'ennemi a maintenant 42 PV.
L'ennemi attaque et vous inflige 11 dégâts. Vous avez maintenant 39 PV.
```

---

## Structure du code

| Élément         | Description                                      |
|-----------------|--------------------------------------------------|
| `main()`        | Fonction principale contenant toute la logique   |
| `tour`          | Compteur du tour en cours                        |
| `vous`          | Points de vie du joueur                          |
| `ennemi`        | Points de vie de l'ennemi                        |
| `potions`       | Nombre de potions restantes                      |
| `skip_player_turn` | Indicateur de tour sauté après l'usage d'une potion |

---

## Auteur

Projet personnel — jeu minimaliste en Python.
