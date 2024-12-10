# Infraestrutura do projeto

## Instalação da Infraestrutura

1. Instale o Docker e o Docker Compose
2. Instale o Traefik

Você pode criar um arquivo `docker-compose.yml` para configuração do Traefik, fora do diretório do sinpom e então gerencia-lo com o Docker Compose.

Exemplo de arquivo `docker-compose.yml` para configuração do Traefik:

```yaml
networks:
  proxy:
    external: true

services:
  traefik:
    image: traefik:v2.10
    container_name: sinpom-traefik
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--log.level=DEBUG"
      - "--api.insecure=true"
      - "--entrypoints.websecure.http.tls=true"
      - "--providers.file.filename=/etc/traefik/dynamic.yml"
    ports:
      - "80:80"
      - "443:443"
      - "8099:8080"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./certs:/certs"
      - "./traefik-dynamic-config.yml:/etc/traefik/dynamic.yml"
    networks:
      - proxy
```

Use um arquivo `traefik-dynamic-config.yml` para configuração do Traefik. Exemplo:

```yaml
tls:
  certificates:
    - certFile: /certs/cert.cert
      keyFile: /certs/cert.key
```

3. Clone o repositorio do sinpom

```bash
git clone https://github.com/sinpom/sinpom.git
```

4. Arquivo `.env`

Copie o arquivo `.env` correspondente ao ambiente de desenvolvimento e renomeie.

Exemplo no terminal:

```bash
cd sinpom
cp .env.local .env
```

5. Docker Compose

Agora você pode executar o Docker Compose para criar os serviços com o comando:

Use o arquivo `docker-compose-local.yml` para configuração local do sinpom ou use `docker-compose-dev-ubuntu.yml` para ambiente de desenvolvimento em Ubuntu.

```bash
docker compose -f docker-compose-local.yml up -d
```
