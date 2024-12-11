---
sidebar_position: 3
---

# Estrutura do Projeto

## Estrutura do Projeto com Docker

O projeto do sinpom utiliza o Docker para gerenciamento de containeres e imagens Docker. Ele utiliza o Docker Compose para gerenciamento de containeres e imagens Docker.

```bash
docker-compose-dev-ubuntu.yml
docker-compose-local.yml
docker-compose.yml
Dockerfile
.env
```

<!-- ```bash
./.docker
  /traefik
  /mysql
./webapp
docker-compose.yml
``` -->

## Estrutura do Laravel

O projeto do sinpom utiliza o framework Laravel para desenvolvimento da aplicação. Ele utiliza o Composer para gerenciamento de dependências do projeto.

```bash
/app
  /Console
  /Exceptions
  /Http
    /Controllers
    /Middleware
  /Library
  /Mail
  /Providers
  /Scopes
/bootstrap
/config
/database
/public
/resources
/routes
/storage
/tests
/vendor
composer.json
package.json
```
