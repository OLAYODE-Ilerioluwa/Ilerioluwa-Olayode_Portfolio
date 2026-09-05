import csv
import requests
import time

# Récupération de la liste complète des agents via l'API GeoJSON
response = requests.get("https://api.meilleursbiens.com/api/v1/mbportail/agents/geojson.json")
data = response.json()
agents = data["features"]


def get_agents():
    """Extrait les informations de base de chaque agent depuis le GeoJSON"""
    resultats = []
    for agent in agents:

        slug = agent["properties"]["user"]["slug"]
        if slug:
            lien_profil = "https://meilleursbiens.com/site/" + slug
        else:
            lien_profil = ""

        prenom = agent["properties"]["user"]["profile"]["first_name"]
        nom = agent["properties"]["user"]["profile"]["name"]
        code_postale = agent["properties"]["user"]["postalCode"]
        mail = agent["properties"]["user"]["emailPro"]
        ville = agent["properties"]["user"]["city"]
        lien = agent["properties"]["user"]["profile"]["link_linkedin"]

        # Ajout des infos de l'agent dans la liste
        resultats.append({
            "slug": slug,
            "lien_profil": lien_profil,
            "prenom": prenom,
            "nom": nom,
            "code_postale": code_postale,
            "mail": mail,
            "ville": ville,
            "lien": lien,
        })
    return resultats


def get_phone(slug):
    """Récupère le numéro de téléphone d'un agent via l'API dédiée (3 tentatives)"""
    if slug:
        for _ in range(3):
            try:
                response_phone = requests.get("https://api.meilleursbiens.com/api/v1/mbportail/agent/phone/" + slug)
                data_phone = response_phone.json()
                if "data" in data_phone:
                    numero = "\t" + data_phone["data"]["phone"]
                    return numero
                else:
                    numero = ""
            except Exception:
                # En cas d'erreur réseau, on attend avant de réessayer
                time.sleep(1)
        return ""
    else:
        return ""


def get_biens(slug):
    """Récupère les statistiques des biens d'un agent (mandats actifs, vendus, prix moyen) avec 3 tentatives"""
    if slug:
        for _ in range(3):
            try:
                # Récupération de la première page pour connaître le nombre total de pages
                mandat = requests.get("https://api.meilleursbiens.com/api/v2/mbportail/biens/agent/" + slug + "?page=1")
                nb_mandat = mandat.json()
                nb_page = nb_mandat["data"]["last_page"]

                # Parcours de toutes les pages pour récupérer tous les biens
                ma_liste = []
                for i in range(1, nb_page + 1):
                    response_biens = requests.get("https://api.meilleursbiens.com/api/v2/mbportail/biens/agent/" + slug + "?page=" + str(i))
                    data_mandat = response_biens.json()
                    if "data" in data_mandat:
                        mandat = data_mandat["data"]["data"]
                        ma_liste.extend(mandat)

                # Calcul des statistiques
                nb_mandates = len([b for b in ma_liste if b.get("status") == 1])
                nb_sales = len([b for b in ma_liste if b.get("status") == 3])
                prix_actifs = [b.get("price_public") for b in ma_liste if b.get("status") == 1 and b.get("price_public") is not None]

                if nb_mandates > 0:
                    avg_mandate_price = sum(prix_actifs) / nb_mandates
                else:
                    avg_mandate_price = ""

                return {
                    "nb_mandates": nb_mandates,
                    "nb_sales": nb_sales,
                    "avg_mandate_price": avg_mandate_price,
                }
            except Exception:
                # En cas d'erreur réseau, on attend avant de réessayer
                time.sleep(1)

        # Si les 3 tentatives échouent, retourner des valeurs vides
        return {"nb_mandates": "", "nb_sales": "", "avg_mandate_price": ""}

    else:
        return {"nb_mandates": "", "nb_sales": "", "avg_mandate_price": ""}


def main():
    """Fonction principale — orchestre le scraping et écrit le CSV"""
    with open("agents.csv", "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f, delimiter=";")

        # Écriture de l'en-tête du CSV
        writer.writerow(["lien_profil", "first_name", "last_name", "postal_code", "city", "phone_number", "email", "nb_mandates", "avg_mandate_price", "nb_sales", "linkedin_url"])

        # Boucle sur chaque agent
        for agent in get_agents():
            bien = get_biens(agent["slug"])
            phone = get_phone(agent["slug"])

            # Écriture de la ligne dans le CSV
            writer.writerow([agent["lien_profil"], agent["prenom"], agent["nom"], agent["code_postale"], agent["ville"], phone, agent["mail"], bien["nb_mandates"], bien["avg_mandate_price"], bien["nb_sales"], agent["lien"]])

    print("Dossier prêt !")


if __name__ == "__main__":
    main()