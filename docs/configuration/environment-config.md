---
sidebar_position: 1
---

# Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/sinpom/sinpom.git
cd sinpom
```

### Configuração do Docker

1. Copie o arquivo `.env.example` para `.env`

```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env`

Você pode usar o arquivo `.env.local` para configuração local do sinpom.

3. Inicie os containeres com o Docker Compose

**Para ambiente de desenvolvimento em Ubuntu:**

Criar containeres

```bash
docker compose -f docker-compose-dev-ubuntu.yml up -d
```

Remover containeres

```bash
docker compose -f docker-compose-dev-ubuntu.yml down
```

**Para ambiente local:**

Criar containeres

```bash
docker compose -f docker-compose-local.yml up -d
```

Remover containeres

```bash
docker compose -f docker-compose-local.yml down
```

:::warning
Use o arquivo `docker-compose-local.yml` para configuração local do sinpom ou use `docker-compose-dev-ubuntu.yml` para ambiente de desenvolvimento em Ubuntu(#).
:::

**Para ambiente em produção:**

Criar containeres

```bash
docker compose -f docker-compose-producao.yml up -d
```
