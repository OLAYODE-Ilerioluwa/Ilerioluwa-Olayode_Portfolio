# 🃏 Jeu La Duellette

Un jeu de cartes automatique à deux joueurs en ligne de commande, écrit en Python.

---

## Description

La Duellette est un jeu de cartes où deux joueurs s'affrontent en retournant chacun une carte à chaque tour. Le gagnant de chaque manche est celui dont la carte est **la plus proche de 7**. Celui qui remporte le plus de manches gagne la partie.

---

## Prérequis

- Python 3.x

Aucune bibliothèque externe n'est nécessaire (seul le module `random` de la bibliothèque standard est utilisé).

---

## Lancement

```bash
python Jeu_La_Duellette.py
```

Le jeu se déroule **entièrement de façon automatique** — aucune saisie n'est requise.

---

## Règles du jeu

### Le paquet

- 40 cartes numérotées de **1 à 10**, en **4 exemplaires** chacune.
- Le paquet est mélangé aléatoirement, puis distribué équitablement :
  - **Joueur 1** reçoit 20 cartes
  - **Joueur 2** reçoit 20 cartes

### Déroulement

À chaque tour, les deux joueurs retournent simultanément la première carte de leur main. La manche est gagnée par le joueur dont la carte est **la plus proche de 7**.

| Situation                         | Résultat            |
|-----------------------------------|---------------------|
| Les deux cartes sont à égale distance de 7 | Aucun point (égalité) |
| Les deux joueurs tirent un 7      | Aucun point (cas particulier) |
| Un joueur est plus proche de 7    | Ce joueur marque 1 point |

> La distance d'une carte à 7 est calculée ainsi : `|7 - valeur_carte|`  
> Exemple : la carte 5 a une distance de 2, la carte 9 a une distance de 2 → égalité.

### Fin de partie

Après les 20 tours, le joueur avec le **plus de points** est déclaré vainqueur.

> ⚠️ En cas d'égalité parfaite en score, le Joueur 2 est déclaré vainqueur (comportement actuel du code).

---

## Exemple de sortie

```
--- Tour 1 ---
Le joueur 1 a 20 carte. Le joueur 2 a 20 carte
Le Joueur 1 a tiré la carte 3 et le joueur 2 a tiré la carte 8
Le joueur a 0 et le joueur a 1

--- Tour 2 ---
Le joueur 1 a 19 carte. Le joueur 2 a 19 carte
Le Joueur 1 a tiré la carte 7 et le joueur 2 a tiré la carte 7
Pas de point
...

Le Joueur 2 est le vainqueur, avec 11 points
```

---

## Structure du code

| Élément              | Description                                                  |
|----------------------|--------------------------------------------------------------|
| `liste`              | Le paquet de 40 cartes mélangées                             |
| `joueur_1 / joueur_2`| Mains des deux joueurs (20 cartes chacun)                    |
| `Score_Joueur1/2`    | Scores respectifs des deux joueurs                           |
| `tour`               | Compteur de tour                                             |
| `creer_paquet()`     | Génère, mélange et distribue les cartes                      |
| `gagnant_manche()`   | Détermine le gagnant d'une manche selon la proximité à 7     |
| `jeu_principal()`    | Orchestre le déroulement complet de la partie                |

---

## Auteur

Projet personnel — jeu de cartes minimaliste en Python.
