import random


liste = []
joueur_1 = []
joueur_2 =[]
Score_Joueur1 = 0
Score_Joueur2 = 0
Ecart1 = 0
Ecart2 = 0
tour = 0

print("Bienvenu dans le Jeu La Duellette")
print(f"Le joueur 1 a {len(joueur_1)} carte. Le joueur 2 a {len(joueur_2)} carte")
    
def creer_paquet():  
    for j in range(1,11):
        for i in range(4):
            liste.append(j)#Création des cartes 4x10
    
    random.shuffle(liste) #Melange les cartes
    print(liste)
    for i in range(len(liste)):
        #Donne les cartes au joueur
        if i%2 != 0 :
            joueur_1.append(liste[i])
        elif i%2 == 0 :
            joueur_2.append(liste[i])
        else:
            None
    
    
def gagnant_manche(carte1,carte2):
        Ecart1 = abs(7 - carte1)
        Ecart2 = abs(7 - carte2)
        
        if carte1 == 7 and carte2 == 7:
            return 0

        elif Ecart1 > Ecart2 :
            return 2
        else: 
            return 1
        
           
def jeu_principal():
    global tour
    global Score_Joueur1
    global Score_Joueur2
    creer_paquet()
    for i in range (len(joueur_1)):
        tour += 1
        print(f"\n--- Tour {tour} ---")
        print(f"Le joueur 1 a {len(joueur_1)-i} carte. Le joueur 2 a {len(joueur_2)-i} carte")
        gagnant = gagnant_manche(joueur_1[i],joueur_2[i])
       
        if gagnant == 1:
            Score_Joueur1 +=1
            print(f"Le joueur a {Score_Joueur1} et le joueur a {Score_Joueur2} ")
        elif gagnant == 2:
            Score_Joueur2 += 1
            print(f"Le joueur a {Score_Joueur1} et le joueur a {Score_Joueur2} ")
        else:
            print("Pas de point")
            print(f"Le joueur a {Score_Joueur1} et le joueur a {Score_Joueur2} ") 
        
        print(f"Le Joueur 1 a tiré la carte {joueur_1[i] } et le joueur 2 a tiré la carte {joueur_2[i] }")
    if Score_Joueur1 > Score_Joueur2:
        print(f"Le Joueur 1 est le vainqueur, avec {Score_Joueur1} point")
    else:
        print(f"Le Joueur 2 est le vainqueur , avec {Score_Joueur2} point")
print(jeu_principal())


