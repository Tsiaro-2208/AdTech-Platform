### ERREURS RENCONTREES
1. Integration de Redis
On avait un problème sur l'integration de Redis dans Nest car la syntaxe a changé.
2. Dockerisation
Un conflit sur la version de node utilisée lors du développement et l'image docker choisie.

### ARBITRAGES TECHNIQUES
1. Usage de Next JS au Frontend
On a choisit Next car celui-ci facilite la gestion de routes et integre initialement Tailwind CSS.
2. Usage de Axios et React-Query
Axios et React-query ont été utiliser pour  faciliter la gestion des erreurs et des caches de données côté client.
3. Integration de redis entre la couche métier et l'acces aux données
On a integré redis entre le backe,d et MongoDB pour rendre l'application plus performante
4. Monorepo Github
On a choisit d'adopter un MonoRepo vu que l'application n'est pas trop grande et pour faciliter la dockerisation