---
sidebar_position: 3
---

# Migrations e seeds

Executar as migrações e popular o banco de dados.

## Migrações

Criando as tabelas no banco de dados.

:::info
O comando **php artisan migrate** deve ser executado dentro do container do portal sinpom
:::

Execute os comandos abaixo para executar a migrações do banco de dados.

```bash
# Entrar no container do portal sinpoms
docker exec -it sinpom-web bash

# Executar as migrações
php artisan migrate
```

Você pode verificar se o sistema está funcionando corretamente, acesse o portal sinpom em:

- [https://sinpom.docker.localhost](https://sinpom.docker.localhost)

## Populando o banco de dados

:::info
O comando **php artisan db:seed** deve ser executado dentro do container do portal sinpom
:::

Execute os comandos abaixo para popular o banco de dados.

```bash
# Entrar no container do portal sinpoms
docker exec -it sinpom-web bash

# Executar o seed
php artisan db:seed
```
