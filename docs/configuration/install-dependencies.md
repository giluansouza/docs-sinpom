---
sidebar_position: 2
---

# Instalar dependências

Executar **composer install** para instalar as dependências do sinpom.

:::info
O comando **composer install** deve ser executado dentro do container do portal sinpom
:::

Execute o comando abaixo para instalar as dependências do projeto.

```bash
docker exec -it sinpom-web bash -c "composer install"
```
