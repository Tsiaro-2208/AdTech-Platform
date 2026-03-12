### JUSTIFICATION DE CHOIX TECHNIQUES

1. Usage de Next JS au Frontend
On a choisit Next car celui-ci facilite la gestion de routes et integre initialement Tailwind CSS.
2. Usage de Axios et React-Query
Axios et React-query ont été utiliser pour  faciliter la gestion des erreurs et des caches de données côté client.
3. Integration de redis entre la couche métier et l'acces aux données
On a integré redis entre le backe,d et MongoDB pour rendre l'application plus performante
4. Monorepo Github
On a choisit d'adopter un MonoRepo vu que l'application n'est pas trop grande et pour faciliter la dockerisation

### JUSTIFICATION DU PROCESSUS

1. Initialisation
Création des configurations git et Docker pour faciliter le lancement du projet

2. Création du CRUD basique d'abord
C'est l'étape la plus simple mais qui permet déjà d'évaluer la capacité du système à satisfaire une requête utilisateur

3. Gestion de cache
Amélioration des performances en activant la mise en cache redis entre le backend et la base de données, react-query pour la cache coté client. Cela a pour objectif d'optimiser le temps de réponses des requêtes utilisateurs

### LANCER LE PROJET
## Prérequis
1. Vous devez avoir Git et Docker/DockerHub installé sur votre machine.
2. Après clone du projet sur https://github.com/Tsiaro-2208/AdTech-Platform.git, 
lancez un coup de docker compose up ou lancer le fichier launch.bat
