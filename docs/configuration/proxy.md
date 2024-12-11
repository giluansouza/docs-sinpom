---
sidebar_position: 4
---

# Proxy/Proxy Reverso

O Traefik está configurado para gerenciar o roteamento de tráfego com base em domínios. Certifique-se de que o DNS ou o arquivo hosts aponta para os domínios configurados.

## Usando o Traefik com Docker

:::warning
O Traefik precisa ser executado em um container separado, fora do diretório do sinpom.
:::

Você pode criar um arquivo `docker-compose.yml` para configuração do Traefik, fora do diretório do sinpom e então gerencia-lo com o Docker Compose.

```bash
# Saindo do diretório do sinpom
cd ../
# Criando diretório para o traefik
mkdir traefik
cd traefik
touch docker-compose.yml
touch dynamic.yml
```

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

Use um arquivo `dynamic.yml` para configuração do Traefik. Exemplo:

```yaml
tls:
  certificates:
    - certFile: /certs/cert.cert
      keyFile: /certs/cert.key
```

## Configurando o hosts

No arquivo de hosts do seu sistema operacional, adicione a seguinte linha:

```bash
127.0.0.1 sinpom.docker.localhost
```

### **Exemplo de edição do Hosts no Ubuntu**

O arquivo de **hosts** no Ubuntu é usado para mapear endereços IP a nomes de domínio de forma local, sem a necessidade de configurar um servidor DNS.

#### **Passo 1: Abrir o Arquivo de Hosts com Permissões de Superusuário**

O arquivo de hosts está localizado em `/etc/hosts`. Para editá-lo, você precisa de permissões de administrador. Use o editor de texto de sua preferência (neste exemplo, usamos `nano`).

Digite o seguinte comando no terminal:

```bash
sudo nano /etc/hosts
```

#### **Passo 2: Editar o arquivo**

O conteúdo do arquivo /etc/hosts será exibido no editor. Ele geralmente terá esta aparência inicial:

```plain
127.0.0.1 localhost
127.0.0.1 seu-host-local
```

Adicione a entrada necessária

```bash
127.0.0.1 sinpom.docker.localhost
```

#### **Passo 3: Salvar e Fechar o Arquivo**

```bash
Ctrl + O
Enter
Ctrl + X
```

#### **Passo Opcional: Limpar o Cache DNS (se necessário)**

Se você tiver problemas para resolver o domínio, limpe o cache de DNS. Para sistemas que usam o systemd-resolved, execute:

```bash
sudo systemctl restart systemd-resolved
```
