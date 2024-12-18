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
