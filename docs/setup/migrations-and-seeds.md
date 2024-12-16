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

Execute o comando abaixo para executar a migrações do banco de dados.

```bash
docker exec -it sinpom-web bash -c "php artisan migrate"
```

Você pode verificar se o sistema está funcionando corretamente, acesse o portal sinpom em:

- https://sinpom.docker.localhost

## Populando o banco de dados

:::info
O comando **php artisan db:seed** deve ser executado dentro do container do portal sinpom
:::

Execute o comando abaixo para popular o banco de dados.

```bash
docker exec -it sinpom-web bash -c "php artisan db:seed"
```
