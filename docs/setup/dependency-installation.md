---
sidebar_position: 2
---

# Instalar dependências

Executar **composer install** para instalar as dependências do sinpom.

:::info
O comando **composer install** deve ser executado dentro do container do portal sinpom
:::

Acesse o container do portal sinpom.

```bash
docker exec -it sinpom-web bash
```

Dentro do container, execute o comando abaixo para instalar as dependências do projeto.

```bash
composer install
```

Também é possível executar o comando acima fora do container, mas dentro do diretório raiz do projeto.
Esse comando irá instalar as dependências do projeto no container.

```bash
docker exec -it sinpom-web bash -c "composer install"
```
