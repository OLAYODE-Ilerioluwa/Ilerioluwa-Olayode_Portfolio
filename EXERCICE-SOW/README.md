# Scraper MeilleursBiens — Documentation

## Présentation du projet

Ce script Python extrait automatiquement les informations de tous les agents du réseau **MeilleursBiens** et génère un fichier CSV structuré. Il a été développé dans le cadre d'un exercice de BTS SIO.

---

## Ce que fait le script

1. Récupère la liste de tous les agents via une API publique
2. Pour chaque agent, récupère son numéro de téléphone
3. Pour chaque agent, récupère ses statistiques de biens (mandats actifs, vendus, prix moyen)
4. Exporte tout dans un fichier `agents.csv`

---

## Structure du script

Le script est organisé en 4 fonctions :

### `get_agents()`
Fait une requête à l'API GeoJSON pour récupérer la liste complète des agents avec leurs informations de base (nom, prénom, ville, email, LinkedIn...).

### `get_phone(slug)`
Fait une requête à l'API téléphone pour récupérer le numéro d'un agent à partir de son slug. Inclut 3 tentatives en cas d'erreur réseau.

### `get_biens(slug)`
Fait des requêtes à l'API des biens pour récupérer toutes les annonces d'un agent (en gérant la pagination), puis calcule :
- `nb_mandates` : nombre de biens actifs (status == 1)
- `nb_sales` : nombre de biens vendus (status == 3)
- `avg_mandate_price` : prix moyen des biens actifs

### `main()`
Orchestre tout : appelle les 3 fonctions et écrit les résultats dans le CSV.

---

## Colonnes du CSV

| Colonne | Description |
|---|---|
| `lien_profil` | URL vers le profil de l'agent sur le site |
| `first_name` | Prénom |
| `last_name` | Nom |
| `postal_code` | Code postal |
| `city` | Ville |
| `phone_number` | Numéro de téléphone (numéro général, non disponible individuellement) |
| `email` | Adresse e-mail professionnelle |
| `nb_mandates` | Nombre de biens actifs en vente/location |
| `avg_mandate_price` | Prix moyen des biens actifs |
| `nb_sales` | Nombre de biens vendus/loués |
| `linkedin_url` | URL du profil LinkedIn |

---

## APIs utilisées

| API | Description |
|---|---|
| `GET /api/v1/mbportail/agents/geojson.json` | Liste complète des agents |
| `GET /api/v1/mbportail/agent/phone/{slug}` | Numéro de téléphone d'un agent |
| `GET /api/v2/mbportail/biens/agent/{slug}?page=X` | Biens d'un agent (paginé) |

---

## Termes et notions appris

### Python de base

| Terme | Définition |
|---|---|
| `import` | Permet d'utiliser une bibliothèque externe dans le script |
| `variable` | Conteneur qui stocke une valeur (ex: `prenom = "Nathalie"`) |
| `for ... in ...` | Boucle qui parcourt chaque élément d'une liste |
| `if / else` | Condition : exécute du code selon si une condition est vraie ou fausse |
| `def` | Déclare une fonction réutilisable |
| `return` | Retourne une valeur depuis une fonction |
| `[]` | Accès à une valeur dans une liste ou un dictionnaire |
| `len()` | Compte le nombre d'éléments dans une liste |
| `sum()` | Additionne tous les éléments d'une liste |
| `str()` | Convertit une valeur en texte (string) |
| `print()` | Affiche un message dans le terminal |
| `try / except` | Gestion des erreurs : essaie du code, et si ça plante, fait autre chose |
| `range(n)` | Génère une suite de nombres de 0 à n-1 |
| `append()` | Ajoute un élément à une liste |
| `extend()` | Ajoute plusieurs éléments à une liste |
| `.get()` | Accède à une clé d'un dictionnaire sans planter si elle n'existe pas |
| `list comprehension` | Syntaxe courte pour créer une liste filtrée : `[x for x in liste if condition]` |
| `if __name__ == "__main__"` | Lance `main()` uniquement si le script est exécuté directement |

### Bibliothèques utilisées

| Bibliothèque | Utilité |
|---|---|
| `requests` | Faire des requêtes HTTP (appeler des APIs) |
| `csv` | Lire et écrire des fichiers CSV |
| `time` | Ajouter des pauses dans le script (`time.sleep()`) |

### Notions liées aux APIs

| Terme | Définition |
|---|---|
| `API` | Interface qui permet à un programme de communiquer avec un serveur pour récupérer des données |
| `requête GET` | Demande envoyée à un serveur pour récupérer des données |
| `JSON` | Format de données structurées utilisé par les APIs (ressemble à un dictionnaire Python) |
| `slug` | Identifiant texte unique d'un agent dans l'URL (ex: `65-nadira-zemani`) |
| `endpoint` | URL précise d'une API qui retourne un type de données spécifique |
| `rate limit` | Limite du nombre de requêtes autorisées par l'API sur une période donnée |
| `pagination` | Mécanisme qui divise les résultats en plusieurs pages |
| `response.json()` | Convertit la réponse de l'API en dictionnaire Python |
| `status code` | Code retourné par le serveur (200 = OK, 404 = non trouvé) |

### Notions liées aux fichiers CSV

| Terme | Définition |
|---|---|
| `CSV` | Format de fichier tabulaire où les valeurs sont séparées par un délimiteur |
| `délimiteur` | Caractère qui sépare les colonnes (ici `;` pour compatibilité Excel français) |
| `encoding` | Encodage du fichier texte (ici `utf-8-sig` pour les accents sous Excel) |
| `csv.writer` | Objet Python qui permet d'écrire des lignes dans un fichier CSV |
| `writerow()` | Écrit une ligne dans le CSV |

---

## Difficultés rencontrées et solutions

| Problème | Solution |
|---|---|
| Accents mal affichés dans Excel | Utiliser `encoding="utf-8-sig"` |
| Colonnes non séparées dans Excel | Utiliser `delimiter=";"` |
| Numéros de téléphone en notation scientifique | Ajouter `\t` devant le numéro pour forcer le format texte |
| Rate limit de l'API | Ajouter `time.sleep()` entre chaque requête |
| Clé inexistante dans le JSON | Utiliser `.get()` au lieu de `[]` |
| Division par zéro pour la moyenne | Vérifier `if nb_mandates > 0` avant de diviser |
| Numéro de téléphone individuel non disponible | L'API retourne uniquement le numéro général du réseau |

---

## Lancer le script

```bash
python Exercise-sow.py
```

Le script génère automatiquement `agents.csv` dans le même dossier et affiche `Dossier prêt !` une fois terminé.

> ⚠️ Le script prend environ **45 à 60 minutes** à cause des pauses entre requêtes pour respecter le rate limit de l'API.
