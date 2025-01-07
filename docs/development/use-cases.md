---
sidebar_position: 2
---

# Casos de Uso

### Login no sistema

**Descrição:** O usuário deve realizar login no sistema para acessar os recursos do portal.

**Atores:** Usuário.

**Pré-condições:**

- O usuário já possui uma conta ativa no sistema

**Fluxo Principal:**

1. O usuário acessa a página de login: https://sistema.exemplo/login
2. O usuário preenche os campos de e-mail e senha.
3. O usuário clicar em "Entrar".
4. Após validar as credenciais o sistema solicita o OTP para autenticação
5. O sistema valida o OTP e redireciona o usuário para a página de inicial

**Fluxos Alternativos:**

- **F1**: Caso as credenciais sejam inválidas, o sistema exibe uma mensagem de erro.
- **F2**: Uso do sistema sem OTP

1. O usuário acessa a página de login: https://sinpom.docker.localhost/login
2. O usuário preenche os campos de e-mail e senha.
3. O usuário clicar em "Entrar".
4. O sistema verifica as credenciais e redireciona o usuário para a página de inicial

---

### Novo Documento no Sistema

**Descrição:** (Fluxo simplificado) O usuário pode criar novos documentos no sistema a partir do menu "Novo documento".

**Atores:** Usuário.

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissões para criar documentos.

**Fluxo Principal:**

1. O usuário acessa a seção **Documentos** no menu lateral esquerdo.
2. O usuário clica no botão **Novo documento**.
3. O sistema exibe uma lista suspensa com os tipos de documentos disponíveis:
   - Ordem de busca
   - Pedido de busca
   - Relatório de inteligência
   - Relatório de busca
   - Relatório interno
4. O usuário seleciona um tipo de documento, como **"Ordem de busca"**.
5. O sistema redireciona o usuário para a página de criação do documento correspondente.

**Fluxos Alternativos:**

- **F1**: Caso o usuário selecione um tipo de documento incorreto, ele pode retornar ao menu **"Novo documento"** e selecionar o tipo correto.
- **F2**: Se o usuário não tiver permissões para criar documentos, o sistema exibe uma mensagem de erro informando a restrição.

**Pós-condições:**

- O documento é criado com sucesso e pode ser visualizado na lista de documentos.

**Regras de Negócio:**

- Cada documento criado deve ser armazenado com as informações obrigatórias exigidas pelo sistema.
- A lista de documentos deve refletir as entradas mais recentes e exibir a data de criação.

**Exemplo de Interface:**

- O botão **Novo documento** é exibido na parte superior esquerda da tela, próximo às abas **"Entrada"**, **"Saída"**, **"Meus rascunhos"**, **"Arquivo pessoal"** e **"Arquivo da seção"**.
- A lista suspensa contém os tipos de documentos organizados em itens clicáveis.

---

## Análises

### Consulta de Entidade Pessoa

**Descrição:** O usuário pode consultar as informações de uma entidade pessoa no sistema.

**Atores:** Usuário.

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Análises** no menu lateral esquerdo.
2. O usuário clica na opção **Pessoa**.
3. O sistema exibe uma tela com campos para buscar a entidade pessoa, como **"Nome"** e **"CPF"**.
4. O usuário clica em **"Consultar"**.
5. O sistema exibe uma lista com as entidades encontradas.

**Fluxos Alternativos:**

- **F1**: Caso os dados consultados pelo usuário não sejam encontrados, o sistema exibe uma mensagem de erro informando que não foram encontrados resultados.

**Pós-condições:**

- A lista de entidades exibidas pelo usuário deve refletir os resultados da consulta.

**Regras de Negócio:**

- O filtro de **cidade** deve ser combinado com o filtro de **grupo-crime**.

**Exemplo de Interface:**

- Os campos para filtrar as entidades pessoa, como **"Nome"** e **"CPF"**, são exibidos na parte superior tela.
- A lista exibida contém as entidades organizados em itens clicáveis.

---

### Cadastro de logocrim

**Descrição:** Cadastro de logocrim no sistema.

**Atores:** Usuário.

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Análises** no menu lateral esquerdo.
2. O usuário clica na opção **LogoCrim**.
3. O sistema exibe uma tela com os logocrims cadastrados.
4. O usuário clica em **"Cadastrar"** no canto superior direito da tela.
5. O sistema exibe uma tela com os campos para cadastrar um novo logocrim, como **"Adicionar foto"** e **"Grupo-crime"**.
6. O usuário preenche os campos necessários, é possível anexar arquivos.
7. O usuário deve marcar no mapa a localização do logocrim.
8. O usuário clica em **"Gravar"**.

**Fluxos Alternativos:**

- **F1**: Caso o usuário desista de cadastrar um novo logocrim, ele deve clicar em cancelar no final da página e então será redirecionado para a tela de logocrim.

**Pós-condições:**

- A lista de LogoCrim exibidas pelo usuário deve refletir os resultados da consulta, com o novo registro exibido no final da lista.

**Regras de Negócio:**

- O campo de **grupo-crime** é obrigatório.

**Exemplo de Interface:**

- A imagem do LogoCrim é exibida na parte superior do formulário.
- O mapa é exibido abaixo do formulário seguido pelos botões de **"Gravar"** e **"Cancelar"**.

---

### Consulta de logocrim

**Descrição:** Lista de logocrim no sistema.

**Atores:** Usuário.

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Análises** no menu lateral esquerdo.
2. O usuário clica na opção **LogoCrim**.
3. O sistema exibe uma tela com os logocrims cadastrados.
4. O usuário escolhe uma das opções da lista e clica no card correspondente.
5. O sistema redireciona o usuário para a tela de detalhes do logocrim.
6. O usuário tem acesso a todos os dados cadastrados, além do mapa com a localização (é possível fazer download de anexos).

**Fluxos Alternativos:**

- **F1:**

1. O usuário acessa a seção Análises no menu lateral esquerdo.
2. O usuário clica na opção LogoCrim.
3. O usuário clica em "Filtrar" e preenche os campos para filtrar os logocrims.
4. O sistema exibe os resultados filtrados.
5. Os passos seguintes seguem o fluxo principal (passos 4-6).

**Pós-condições:**

- Os detalhes do logocrim devem refletir os dados do link clicado, e a funcionalidade de download e visualização no mapa deve estar acessível sem erros.

**Exemplo de Interface:**

- Na tela principal de logocrims é exibido uma lista em formato de cards com os items cadastrados.
- Na tela de detalhes da logocrim a lista de dados é exibido do lado esquerdo da tela em formato de lista e o mapa do lado direito. O mapa interativo permite zoom e movimentação para visualização detalhada.

---

### Cadastro de localidade

**Descrição:** Cadastro de localidade no sistema.

**Atores:** Usuário.

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Análises** no menu lateral esquerdo.
2. O usuário clica na opção **Localidade**.
3. O sistema exibe uma tela com as localidades cadastradas.
4. O usuário clica em **"Cadastrar"** no canto superior direito da tela.
5. O sistema exibe uma tela com os campos para cadastrar um nova localidade, como **"Nome da localidade"** e **"Grupo-crime da localidade"**.
6. O usuário preenche os campos necessários.
7. O usuário pode desenhar o polígono no mapa ou anexar um arquivo KML.
8. O usuário clica em **"Gravar"**.

**Fluxos Alternativos:**

- **F1**: Caso o usuário desista de cadastrar uma nova localidade, ele deve clicar em cancelar no final da página e então será redirecionado para a tela de localidades.

**Pós-condições:**

- A lista de localidades exibidas pelo usuário deve refletir os resultados da consulta, com o novo registro exibido no final da lista na última página existente.

**Regras de Negócio:**

- O campo de **nome da localidade** é obrigatório.
- O campo de **grupo-crime da localidade** é obrigatório.

**Exemplo de Interface:**

- O campo **arquivo MKL** é opcional e está localizado no final da tela imediatamente antes do mapa.
- O mapa é exibido abaixo do formulário seguido pelos botões de **"Gravar"** e **"Cancelar"**.

---

### Consulta de localidade

**Descrição:** Lista de localidade no sistema.

**Atores:** Usuário.

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Análises** no menu lateral esquerdo.
2. O usuário clica na opção **Localidade**.
3. O sistema exibe uma tela com as localidades cadastradas.
4. O usuário escolhe uma das opções listadas na tabela e clica.
5. O sistema redireciona o usuário para a tela de detalhes da localidade.
6. O usuário tem acesso a todos os dados cadastrados, além do mapa com os pontos de interesse.

**Fluxos Alternativos:**

- **F1:**

1. O usuário acessa a seção **Análises** no menu lateral esquerdo.
2. O usuário clica na opção **Localidade**.
3. O usuário clica em "Filtrar" e preenche os campos para filtrar as localidades.
4. O sistema exibe os resultados filtrados.
5. Os passos seguintes seguem o fluxo principal (passos 4-6).

**Pós-condições:**

- Os detalhes da localidade devem refletir os dados do link clicado, e visualização no mapa deve estar acessível sem erros.

**Exemplo de Interface:**

- Na tela principal de localidades é exibido uma lista em formato de tabela com os items cadastrados.
- Na tela de detalhes da localidade a lista de dados é exibido do lado esquerdo da tela em formato de lista e o mapa do lado direito. O mapa interativo permite zoom e movimentação para visualização detalhada.

---

## Recursos

### Consulta de veículos

### Cadastro de veículos

### Consulta de equipamentos

### Cadastro de equipamentos

### Consulta de material bélico

### Cadastro de material bélico

### Consulta de efetivo SinPoM

### Cadastro de efetivo SinPoM

### Prazos de documentos

### Gestão da agência

### Processo de credenciamento

### Processo de descredenciamento

### Dados da OPM
