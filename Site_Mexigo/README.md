# 🌮 MexiGo — Site Vitrine

Site vitrine d'une agence de voyage spécialisée au Mexique, réalisé en HTML / CSS / JavaScript vanilla.



---

## Aperçu

MexiGo est un site multi-pages présentant les services, destinations et la gastronomie d'une agence de voyage fictive basée à Paris. Le design adopte une identité visuelle forte inspirée des couleurs mexicaines (rouge, vert, or) avec des animations au scroll et une navigation fixe.

---

## Structure du projet

```
PROJET_1 - Site_Vitrine/
│
├── Accueil.html          # Page principale — présentation de l'agence
├── activites.html        # Page destinations & activités
├── Gastronomie.html      # Page gastronomie mexicaine
│
├── accueil.css           # Styles de la page d'accueil
├── activites.css         # Styles de la page activités (version finale)
├── activités.css         # Ancienne version CSS activités
├── gastronomie.css       # Styles de la page gastronomie
│
├── script.js             # Validation du formulaire de contact
│
└── image/                # Dossier des ressources visuelles
    ├── Logo.png
    ├── Fond-ecran.jpg
    ├── conseiller1.jpg
    ├── conseiller2.jpg
    ├── conseiller3.jpg
    ├── mexico.jpg
    ├── Cancùn.jpg
    ├── Playa.jpg
    ├── Guana.jpg
    ├── mexique1.jpg
    ├── tacos.jpg
    ├── guacamole.jpg
    └── mole.jpg
```

---

## Pages

### Accueil (`Accueil.html`)
Page principale de l'agence. Elle comprend :
- Hero plein écran avec titre animé
- Présentation de l'agence et de ses valeurs
- Équipe de conseillers (Mario López, Anne-Cécile Morales, Jean Dubois)
- Grille des services (itinéraires, réservations, assistance 24/7, conseils)
- Zones de disponibilité & horaires
- Tarifs indicatifs (3 packs : 59 €, 149 €, devis)
- Témoignages clients
- Formulaire de contact avec sélection de destination

### Activités (`activites.html`)
Présentation des destinations et activités. Elle comprend :
- Introduction avec statistiques clés (86M touristes/an, 35 sites UNESCO, 11 000 km de côtes)
- Fiches des 4 destinations phares avec tarifs indicatifs :
  - Mexico City — 1 000 € / semaine
  - Cancún — 800 € / semaine
  - Playa del Carmen — 1 300 € / semaine
  - Guanajuato — 950 € / semaine
- Galerie photo interactive par destination
- CTA de prise de contact

### Gastronomie (`Gastronomie.html`)
Page dédiée à la cuisine mexicaine (patrimoine UNESCO). Elle comprend :
- Introduction sur la cuisine mexicaine
- 3 plats emblématiques : Tacos, Guacamole, Mole poblano
- 3 boissons traditionnelles : Mezcal, Agua fresca, Atole
- Conseils culinaires pratiques par région

---

## Captures d'écran

### Accueil

![Hero de la page d'accueil, Bienvenidos a México](../Image/MexiGo/01-accueil.webp)

![Section équipe, les trois conseillers de l'agence](../Image/MexiGo/02-equipe.webp)

![Grille des services : itinéraires, réservations, assistance, conseils](../Image/MexiGo/03-services.webp)

![Les trois packs tarifaires et les témoignages clients](../Image/MexiGo/04-tarifs.webp)

![Formulaire de contact avec sélection de destination](../Image/MexiGo/05-contact.webp)

### Activités

![Haut de la page activités, avec les statistiques clés](../Image/MexiGo/06-activites.webp)

![Les quatre destinations phares et leurs tarifs indicatifs](../Image/MexiGo/07-destinations.webp)

![Galerie photo interactive par destination](../Image/MexiGo/08-galerie.webp)

### Gastronomie

![Haut de la page gastronomie](../Image/MexiGo/09-gastronomie.webp)

![Les trois plats emblématiques : tacos, guacamole, mole poblano](../Image/MexiGo/10-plats.webp)

---

## Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| HTML5 | Structure sémantique des pages |
| CSS3 | Mise en page, animations, responsive |
| JavaScript (vanilla) | Header scroll, scroll reveal, validation formulaire |
| Google Fonts | Bebas Neue, Barlow, Barlow Condensed |
| Font Awesome 6 | Icônes |

---

## Fonctionnalités JavaScript

- **Header masquant** — la barre de navigation se cache au scroll vers le bas et réapparaît en remontant
- **Scroll reveal** — les sections s'animent à l'apparition via `IntersectionObserver`
- **Lien actif** — le lien de navigation correspondant à la section visible est mis en surbrillance
- **Validation formulaire** (`script.js`) — vérifie le nom, le format de l'email et le message avant envoi ; affiche des messages d'erreur inline

---

## Lancer le projet

Aucune dépendance ni serveur requis. Ouvrir directement dans un navigateur :

```bash
# Ouvrir la page d'accueil
open Accueil.html
```

> Pour un rendu optimal des polices et des ressources externes, une connexion internet est nécessaire (Google Fonts, Font Awesome via CDN).

---

## Design system

| Variable | Valeur | Rôle |
|----------|--------|------|
| `--rouge` | `#e63946` | Couleur principale, accents |
| `--vert` | `#2d6a4f` | Couleur secondaire |
| `--vert-vif` | `#52b788` | Accents verts |
| `--or` | `#f4a261` | Highlights, prix |
| `--noir` | `#0d0d0d` | Header, fonds sombres |
| `--creme` | `#fdf6ec` | Fond général |

---

## Auteur

Projet réalisé dans le cadre du portfolio — **OLAYODE Ilerioluwa**  
Dépôt : [Projet-Portfolio](https://github.com/OLAYODE-Ilerioluwa/Projet-Portfolio)
