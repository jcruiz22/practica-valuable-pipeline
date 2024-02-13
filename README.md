REST API server que devuelve Hello World

-Unit Test
-Integration Test
-Script para crear contenedor (Dockerfile)
-Static Code Analysis (Linter) [PMD, FindBugs, SonarQube]

Git

-GitHub/GitLab
-Pull Requests

CI/CD

-Al crear una PR lanzar la commit stage [compile, unit test, static code analysis]
-Cuando Merge a main branch:
    -Commit Stage
    -Integration Test
    -Crear Contenedor
    -Publicar Contenedor (Docker Hub, Quay, …)
    -Actualizar Aplicación a cluster de Kubernetes

EXTRAS

-Blue Green Deployment
-Test de despliegue
-Generar versión (no latest) manualmente
-Generar versión automáticamente