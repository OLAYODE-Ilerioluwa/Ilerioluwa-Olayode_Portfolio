import random

def main():
    tour = 0
    vous = 50
    ennemi = 50
    potions = 3
    skip_player_turn = False

    print("Bienvenue dans le Jeu Héros !")
    print("Vous commencez avec 50 points de vie, l'ennemi aussi.")
    print("Vous avez 3 potions, chacune restaurent entre 15 et 50 PV.")
    print("L'ennemi n'a pas de potions.")
    print("Utiliser une potion vous fait gagner des PV et sauter votre prochain tour.")

    while vous > 0 and ennemi > 0:
        tour += 1
        print(f"\n--- Tour {tour} ---")
        print(f"Vous avez {vous} PV, l'ennemi a {ennemi} PV. Potions restantes: {potions}")

        choix = input("Potion ou Attaque ? ").strip().lower()
        if choix == "potion":
            if potions > 0:
                restauration = random.randint(15, 50)
                vous += restauration
                potions -= 1
                skip_player_turn = True
                print(f"Vous utilisez une potion et récupérez {restauration} PV. Vous avez maintenant {vous} PV. Vous sautez votre prochain tour.")
            else:
                print("Vous n'avez plus de potions ! Vous attaquez à la place.")
                degats = random.randint(5, 10)
                ennemi -= degats
                print(f"Vous attaquez et infligez {degats} dégâts. L'ennemi a maintenant {ennemi} PV.")
        elif choix == "attaque":
            degats = random.randint(5, 10)
            ennemi -= degats
            print(f"Vous attaquez et infligez {degats} dégâts. L'ennemi a maintenant {ennemi} PV.")
        else:
            print("Choix invalide. Vous attaquez par défaut.")
            degats = random.randint(5, 10)
            ennemi -= degats
            print(f"Vous attaquez et infligez {degats} dégâts. L'ennemi a maintenant {ennemi} PV.")

        # Vérifier si l'ennemi est mort
        if ennemi <= 0:
            print("Vous avez vaincu l'ennemi ! Victoire !")
            break

        # Attaque de l'ennemi
        degats_ennemi = random.randint(5, 15)
        vous -= degats_ennemi
        print(f"L'ennemi attaque et vous inflige {degats_ennemi} dégâts. Vous avez maintenant {vous} PV.")

        # Vérifier si le joueur est mort
        if vous <= 0:
            print("L'ennemi vous a vaincu ! Défaite !")
            break

        # Si le joueur a sauté son tour, l'ennemi attaque une deuxième fois
        if skip_player_turn:
            skip_player_turn = False
            degats_ennemi = random.randint(5, 15)
            vous -= degats_ennemi
            print(f"L'ennemi attaque à nouveau et vous inflige {degats_ennemi} dégâts. Vous avez maintenant {vous} PV.")

            # Vérifier si le joueur est mort après la deuxième attaque
            if vous <= 0:
                print("L'ennemi vous a vaincu ! Défaite !")
                break

if __name__ == "__main__":
    main()
