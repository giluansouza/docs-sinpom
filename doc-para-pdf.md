# Documentação do SINPOM

## Visão Geral

Este documento descreve a configuração e o uso do sistema desenvolvido com o framework Laravel. O sistema utiliza Docker para executar o servidor e o banco de dados em ambiente isolado, Traefik como proxy reverso para gerenciamento de rotas e certificados SSL. O sistema utiliza o Docker Compose para gerenciamento de containeres e imagens Docker, e Git/GitHub para controle de versões.

O projeto segue o padrão arquitetural MVC (Model-View-Controller), que separa a lógica da aplicação em três camadas principais:

- **Model**: Gerencia os dados e a lógica de negócios.
- **View**: Apresenta a interface ao usuário.
- **Controller**: Processa as requisições do usuário e interage com o modelo e a visão.

# Requisitos

## Requisitos do Sistema

- **PHP >= 8.0:** Para o servidor
- **MySQL >= 8.0:** Para o banco de dados
- **Composer >= 2.4:** Para gerenciamento de dependências do Composer
- **Docker >= 20.10:** Para gerenciar os ambientes da aplicação.
- **Docker Compose >= 1.29:** Para gerenciamento de containeres e imagens Docker.
- **Traefik >= 2.9:** Para gerenciamento de rotas e certificados SSL.
- **Node.js >= 16:**

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

# Instalar dependências

Executar **composer install** para instalar as dependências do sinpom.

:::info
O comando **composer install** deve ser executado dentro do container do portal sinpom
:::

Execute o comando abaixo para instalar as dependências do projeto.

```bash
docker exec -it sinpom-web bash -c "composer install"
```

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

# Acessando o projeto

Acessando o portal sinpom em **ambiente de desenvolvimento**

## Desenvolvimento local

### Após as etapas passadas você já pode acessar o portal sinpom em:

- https://sinpom.docker.localhost

Use um dos usuários do sistema para acessar o portal sinpom.

Usuário nível **Agente**:

- Usuário: **agente@sinpom.com**
- Senha: **123**

# Versionamento com Git/GitHub

## Práticas de Versionamento

- A branch `master` é a versão estável do sistema
- Desenvolva novas funcionalidades em uma branch diferente da `master` ex: 'feature/funcionalidade-nova'

## Fluxo de Trabalho

1. Crie um branch para a nova funcionalidade

```bash
git checkout -b 'feature/funcionalidade-nova'
```

2. Depois de implementar as alterações, faça o commit e envie a branch para o GitHub:

```bash
git add .
git commit -m 'Adicionando nova funcionalidade'
git push origin 'feature/funcionalidade-nova'
```

:::danger

Estabelecer rotina de desenvolvimento/versionamento

:::
