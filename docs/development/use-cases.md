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

**Descrição:** Visualização de veículos no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para visualizar os veículos.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Veículos**.
3. O sistema exibe uma tela com os veículos cadastrados.
4. O usuário pode filtrar os veículos.
5. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do veículo.
6. O sistema exibe a tela de detalhes do veículo.

**Pós-condições:**

- O sistema exibe a lista de veículos cadastrados em formato de tabela.
- Os usuários só conseguem visualizar os veículos da sua agência ou de agências subordinadas.
- O sistema deve direcionar o usuário a página de detalhes do veículo ao clicar em uma das opções da tabela e os dados exibidos devem refletir os dados do veículo escolhido.

**Regras de Negócio:**

- O usuário só consegue visualizar os veículos da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na parte superior da tela está o botão de **"Cadastrar"**.
- Logo após os campos para filtrar os veículos, o botão de **"Filtrar"** está disponível.
- Uma lista com os veículos é exibida abaixo dos campos de filtro.
- Na tela de detalhes no topo aparecem as imagens do veículo e logo abaixo os dados cadastrados.

---

### Edição de veículo

**Descrição:** Edição de veículos no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para editar o veículo selecionado.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Veículos**.
3. O sistema exibe uma tela com os veículos cadastrados.
4. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do veículo.
5. O usuário clica em **"Editar"**.
6. O sistema exibe a tela de edição do veículo.
7. O usuário preenche os campos e clica em **"Gravar"**.
8. O sistema redireciona o usuário para a tela de listagem de veículos e mostra uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário quer remover a imagem de um veículo.

1. Os passos anteriores seguem o fluxo principal (passos 1-6).
2. O usuário deve clicar em **"Remover"** na imagem do veículo.
3. Os passos seguintes seguem o fluxo principal (passos 7-8).

- **F2:** O usuário desiste de editar o veículo.

1. Os passos anteriores seguem o fluxo principal (passos 1-6).
2. O usuário deve clicar em **"Cancelar"** e o sistema redireciona para a tela anterior de detalhes do veículo.

**Pós-condições:**

1. Caso o fluxo principal e fluxo alternativo F1 seja concluído com sucesso:

- As alterações realizadas no veículo estão salvas no sistema.
- O veículo atualizado é exibido na listagem de veículos com as novas informações.
- Uma mensagem de sucesso é exibida ao usuário, confirmando que a edição foi concluída.

2. Caso o fluxo alternativo F2 seja concluído:

- Nenhuma alteração nos dados foi salva no sistema.
- O sistema retorna a tela de detalhes do veículo com os dados anteriores.

**Regras de Negócio:**

- O usuário pode editar os veículos da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na tela é exibido um formulário com os campos para editar o veículo.
- Após os campos do formulário é exibido o botão de **"Adicionar foto"** e um carrossel com as imagens do veículo.
- No final do formulário é exibido o botão de **"Gravar"** e o botão de **"Cancelar"**.

---

### Remover veículo

**Descrição:** Apagar um veículo do sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O veículo ser da agência do usuário.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Veículos**.
3. O sistema exibe uma tela com os veículos cadastrados.
4. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do veículo.
5. O usuário clica em **"Remover"** e confirma a ação.
6. O sistema remove o veículo e redireciona o usuário para a tela de listagem de veículos, exibindo uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de remover o veículo.

1. Os passos anteriores seguem o fluxo principal (passos 1-4).
2. O usuário deve clicar em **"Remover"** e **"Não"**.
3. O sistema fecha o modal permanecendo na página do veículo.

**Pós-condições:**

1. Caso o fluxo principal seja concluído com sucesso:

- O sistema remove o registro do veículo do banco de dados.
- O sistema redireciona o usuário para a tela de listagem de veículos, exibindo uma mensagem de sucesso, confirmando a remoção.

2. Caso o fluxo alternativo F1 seja concluído:

- Nada acontece.

**Regras de Negócio:**

- O só pode remover veículos da sua agência.
- O botão **"Remover"** deve ser exibido apenas para veículos da sua agência.

**Exemplo de Interface:**

- Na tela é exibido as imagens do veículo ou imagem alternativa e logo abaixo os dados do veículo.
- No final é exibido os botões de **"Editar"**, **"Remover"** e **"Voltar"**.

---

### Cadastro de veículos

**Descrição:** Cadastro de novo veículo no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Veículos**.
3. O sistema exibe uma tela com os veículos cadastrados.
4. O usuário clica em **"Cadastrar"**.
5. O sistema exibe a tela de cadastro de veículos.
6. O usuário preenche os dados do veículo e clica em **"Gravar"**.
7. O sistema cadastra o veículo e redireciona o usuário para a tela de listagem de veículos, exibindo uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de cadastrar o veículo.

1. Os passos anteriores seguem o fluxo principal (passos 1-5).
2. O usuário deve clicar em **"Cancelar"**.
3. O sistema redireciona para a tela de listagem de veículos.

**Pós-condições:**

- O sistema cadastra o veículo no banco de dados.
- O sistema redireciona o usuário para a tela de listagem de veículos, exibindo uma mensagem de sucesso, confirmando o cadastro.

**Regras de Negócio:**

- Os campos **"Tipo"**, **"Modelo"**, **"Cor"**, **"Placa original"** e **"Condições do veículo"** devem ser preenchidos.

**Exemplo de Interface:**

- Na tela é exibido um formulário com os campos para cadastrar o veículo.
- Após os campos do formulário é exibido o botão de **"Adicionar foto"** e um carrossel com as imagens selecionadas.
- No final é exibido os botões de **"Gravar"** e **"Cancelar"**.

---

### Consulta de equipamentos

**Descrição:** Visualização de equipamentos no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para visualizar os equipamentos.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Equipamentos**.
3. O sistema exibe uma tela com os equipamentos cadastrados.
4. O usuário pode filtrar os equipamentos.
5. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do equipamento.
6. O sistema exibe a tela de detalhes do equipamento.

**Pós-condições:**

- O sistema exibe a lista de equipamentos cadastrados em formato de tabela.
- Os usuários só conseguem visualizar os equipamentos da sua agência ou de agências subordinadas.
- O sistema deve direcionar o usuário a página de detalhes do equipamento ao clicar em uma das opções da tabela e os dados exibidos devem refletir os dados do equipamento escolhido.

**Regras de Negócio:**

- O usuário só consegue visualizar os equipamentos da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na parte superior da tela está o botão de **"Cadastrar"**.
- Logo após os campos para filtrar os equipamentos, o botão de **"Filtrar"** está disponível.
- Uma lista com os equipamentos é exibida abaixo dos campos de filtro.
- Na tela de detalhes no topo aparecem as imagens do equipamento e logo abaixo os dados cadastrados.

---

### Edição de equipamento

**Descrição:** Edição de um equipamento no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para editar o equipamento selecionado.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Equipamentos**.
3. O sistema exibe uma tela com os equipamentos cadastrados.
4. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do equipamento.
5. O usuário clica em **"Editar"**.
6. O sistema exibe a tela de edição do equipamento.
7. O usuário preenche os campos e clica em **"Gravar"**.
8. O sistema redireciona o usuário para a tela de listagem de equipamentos e mostra uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário quer remover a imagem de um equipamento.

1. Os passos anteriores seguem o fluxo principal (passos 1-6).
2. O usuário deve clicar em **"Remover"** na imagem do equipamento.
3. Os passos seguintes seguem o fluxo principal (passos 7-8).

- **F2:** O usuário desiste de editar o equipamento.

1. Os passos anteriores seguem o fluxo principal (passos 1-6).
2. O usuário deve clicar em **"Cancelar"** e o sistema redireciona para a tela anterior de detalhes do equipamento.

**Pós-condições:**

1. Caso o fluxo principal e fluxo alternativo F1 seja concluído com sucesso:

- As alterações realizadas no equipamento estão salvas no sistema.
- O equipamento atualizado é exibido na listagem de equipamentos com as novas informações.
- Uma mensagem de sucesso é exibida ao usuário, confirmando que a edição foi concluída.

2. Caso o fluxo alternativo F2 seja concluído:

- Nenhuma alteração nos dados foi salva no sistema.
- O sistema retorna a tela de detalhes do equipamento com os dados anteriores.

**Regras de Negócio:**

- O usuário pode editar os equipamentos da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na tela é exibido um formulário com os campos para editar o equipamento.
- Após os campos do formulário é exibido o botão de **"Adicionar foto"** e um carrossel com as imagens do equipamento.
- No final do formulário é exibido o botão de **"Gravar"** e o botão de **"Cancelar"**.

---

### Remover equipamento

**Descrição:** Apagar um equipamento do sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O equipamento deve ser da agência do usuário.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Equipamentos**.
3. O sistema exibe uma tela com os equipamentos cadastrados.
4. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do equipamento.
5. O usuário clica em **"Remover"** e confirma a ação.
6. O sistema remove o equipamento e redireciona o usuário para a tela de listagem de equipamentos, exibindo uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de remover o equipamento.

1. Os passos anteriores seguem o fluxo principal (passos 1-4).
2. O usuário deve clicar em **"Remover"** e **"Não"**.
3. O sistema fecha o modal permanecendo na página do equipamento.

**Pós-condições:**

1. Caso o fluxo principal seja concluído com sucesso:

- O sistema remove o registro do equipamento do banco de dados.
- O sistema redireciona o usuário para a tela de listagem de equipamentos, exibindo uma mensagem de sucesso, confirmando a remoção.

2. Caso o fluxo alternativo F1 seja concluído:

- Nada acontece.

**Regras de Negócio:**

- O usuário só pode remover equipamentos da sua agência.
- O botão **"Remover"** deve ser exibido apenas para equipamentos da agência do usuário logado.

**Exemplo de Interface:**

- Na tela é exibido as imagens do equipamento ou imagem alternativa e logo abaixo os dados do equipamento.
- No final é exibido os botões de **"Editar"**, **"Remover"** e **"Voltar"**.

---

### Cadastro de equipamento

**Descrição:** Cadastro de novo equipamento no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Equipamentos**.
3. O sistema exibe uma tela com os equipamentos cadastrados.
4. O usuário clica em **"Cadastrar"**.
5. O sistema exibe a tela de cadastro de equipamentos.
6. O usuário preenche os dados do equipamento e clica em **"Gravar"**.
7. O sistema cadastra o equipamento e redireciona o usuário para a tela de listagem de equipamentos, exibindo uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de cadastrar o equipamento.

1. Os passos anteriores seguem o fluxo principal (passos 1-5).
2. O usuário deve clicar em **"Cancelar"**.
3. O sistema redireciona para a tela de listagem de equipamentos.

**Pós-condições:**

- O sistema cadastra o equipamento no banco de dados.
- O sistema redireciona o usuário para a tela de listagem de equipamentos, exibindo a lista atualizada com novo equipamento.

**Regras de Negócio:**

- Os campos **"Tipo"**, **"Condições do equipamento"** são obrigatórios.

**Exemplo de Interface:**

- Na tela é exibido um formulário com os campos para cadastrar o equipamento.
- Após os campos do formulário é exibido o botão de **"Adicionar foto"** e um carrossel com as imagens selecionadas.
- No final é exibido os botões de **"Gravar"** e **"Cancelar"**.

---

### Consulta de material bélico

**Descrição:** Visualização de material bélico no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para visualizar o material bélico.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Material Bélico**.
3. O sistema exibe uma tela com os material bélico cadastrados.
4. O usuário pode filtrar os material bélico.
5. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do material bélico.
6. O sistema exibe a tela de detalhes do material bélico.

**Pós-condições:**

- O sistema exibe a lista de material bélico cadastrados em formato de tabela.
- Os usuários só conseguem visualizar o material bélico da sua agência ou de agências subordinadas.
- O sistema deve direcionar o usuário a página de detalhes do material bélico ao clicar em uma das opções da tabela e os dados exibidos devem refletir os dados do material bélico escolhido.

**Regras de Negócio:**

- O usuário só deve conseguir visualizar o material bélico da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na parte superior da tela está o botão de **"Cadastrar"**.
- Logo após os campos para filtrar o material bélico, o botão de **"Filtrar"** está disponível.
- Uma lista com o material bélico é exibida abaixo dos campos de filtro.
- Na tela de detalhes no topo aparecem as imagens do material bélico e logo abaixo os dados cadastrados.

---

### Edição de material bélico

**Descrição:** Edição de um material bélico no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para editar o material bélico selecionado.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Material Bélico**.
3. O sistema exibe uma tela com o material bélico cadastrados.
4. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do material bélico.
5. O usuário clica em **"Editar"**.
6. O sistema exibe a tela de edição do material bélico.
7. O usuário preenche os campos e clica em **"Gravar"**.
8. O sistema redireciona o usuário para a tela de listagem de material bélico e mostra uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário quer remover a imagem de um material bélico.

1. Os passos anteriores seguem o fluxo principal (passos 1-6).
2. O usuário deve clicar em **"Remover"** na imagem do material bélico.
3. Os passos seguintes seguem o fluxo principal (passos 7-8).

- **F2:** O usuário desiste de editar o material bélico.

1. Os passos anteriores seguem o fluxo principal (passos 1-6).
2. O usuário deve clicar em **"Cancelar"** e o sistema redireciona para a tela anterior de detalhes do material bélico.

**Pós-condições:**

1. Caso o fluxo principal e fluxo alternativo F1 seja concluído com sucesso:

- As alterações realizadas no material bélico estão salvas no sistema.
- O material bélico atualizado é exibido na listagem de materiais bélicos com as novas informações.
- Uma mensagem de sucesso é exibida ao usuário, confirmando que a edição foi concluída.

2. Caso o fluxo alternativo F2 seja concluído:

- Nenhuma alteração nos dados foi salva no sistema.
- O sistema retorna a tela de detalhes do material bélico com os dados anteriores.

**Regras de Negócio:**

- O usuário só pode editar os materiais bélicos da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na tela é exibido um formulário com os campos para editar o material bélico.
- Após os campos do formulário é exibido o botão de **"Adicionar foto"** e um carrossel com as imagens do material bélico.
- No final do formulário é exibido o botão de **"Gravar"** e o botão de **"Cancelar"**.

---

### Remover material bélico

**Descrição:** Apagar um material bélico do sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O material bélico deve ser da agência do usuário.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Material Bélico**.
3. O sistema exibe uma tela com os materiais bélicos cadastrados.
4. O usuário clica em um das opções listadas na tabela e é redirecionado para a tela de detalhes do material bélico.
5. O usuário clica em **"Remover"** e confirma a ação.
6. O sistema remove o material bélico do banco de dados e redireciona o usuário para a tela de listagem de materiais bélicos, exibindo uma mensagem de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de remover o material bélico.

1. Os passos anteriores seguem o fluxo principal (passos 1-4).
2. O usuário deve clicar em **"Remover"** e **"Não"**.
3. O sistema fecha o modal permanecendo na página do material bélico.

**Pós-condições:**

1. Caso o fluxo principal seja concluído com sucesso:

- O sistema remove o registro do material bélico do banco de dados.
- O sistema redireciona o usuário para a tela de listagem de material bélico, exibindo uma mensagem de sucesso, e exibindo a lista atualizada sem o registro removido.

2. Caso o fluxo alternativo F1 seja concluído:

- Nada acontece.

**Regras de Negócio:**

- O usuário só pode remover material bélico da sua agência.
- O botão **"Remover"** deve ser exibido apenas para material bélico da agência do usuário logado.

**Exemplo de Interface:**

- Na tela é exibido as imagens do material bélico ou imagem alternativa e logo abaixo os dados do material bélico.
- No final é exibido os botões de **"Editar"**, **"Remover"** e **"Voltar"**.

---

### Cadastro de material bélico

**Descrição:** Cadastro de novo material bélico no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Material Bélico**.
3. O sistema exibe uma tela com os materiais bélicos cadastrados.
4. O usuário clica em **"Cadastrar"**.
5. O sistema exibe a tela de cadastro de material bélico.
6. O usuário preenche os dados do material bélico e clica em **"Gravar"**.
7. O sistema cadastra o material bélico e redireciona o usuário para a tela de listagem de equipamentos, exibindo uma mensagem de sucesso e a lista atualizada com o novo material específico.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de cadastrar o material bélico.

1. Os passos anteriores seguem o fluxo principal (passos 1-5).
2. O usuário deve clicar em **"Cancelar"**.
3. O sistema redireciona para a tela de listagem de materiais bélicos.

**Pós-condições:**

- O sistema cadastra o material bélico no banco de dados.
- O sistema redireciona o usuário para a tela de listagem de equipamentos, exibindo a lista atualizada com o novo material bélico.

**Regras de Negócio:**

- Os campos **"Tipo"**, **"Fabricante"**, **"Condições do equipamento"** são obrigatórios.

**Exemplo de Interface:**

- Na tela é exibido um formulário com os campos para cadastrar o material bélico.
- Após os campos do formulário é exibido o botão de **"Adicionar foto"** e um carrossel com as imagens selecionadas.
- No final é exibido os botões de **"Gravar"** e **"Cancelar"**.

---

### Consulta de efetivo SinPoM

**Descrição:** Consulta do efetido SinPoM no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para visualizar o efetivo.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Efetivo SinPoM**.
3. O sistema exibe uma tela com uma lista do pessoal cadastrado.
4. O usuário pode filtrar o efetivo por unidade e nome/matrícula.
5. O usuário clica em um das opções listadas na tabela.
6. O sistema exibe um modal com todos os dados da pessoa.

**Pós-condições:**

- O sistema exibe a lista do efetivo cadastrado em formato de tabela.
- O sistema mostra um modal com todos os dados da pessoa selecionada pelo usuário.

**Regras de Negócio:**

- O usuário só consegue visualizar os equipamentos da sua agência ou de agências subordinadas.

**Exemplo de Interface:**

- Na parte superior da tela tem os campos de filtro e os botões **"Filtrar"** e **"Limpar"**.
- Logo abaixo aparece os dados quantitativos total e por hierarquia.
- Uma lista com cada membro cadastrado exibindo avatar, posto/graduação, nome, unidade, nível de acesso
- No final da tela aparece a paginação.

---

### Prazos de documentos

**Descrição:** Acompanhamento de prazos de documentos no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Prazos de documentos**.
3. O sistema exibe uma tela com os prazos de documentos recebidos.
4. O usuário pode alternar entre os prazos de documentos recebidos ou solicitados.

**Pós-condições:**

- O sistema exibe a lista de prazos de documentos recebidos.
- Os documentos com prazo vencidos são destacados com fundo vermelho.

**Regras de Negócio:**

**Exemplo de Interface:**

- Na parte superior da tela está os botões da tab **"Solicitados"** e **"Recebidos"**.
- Abaixo é exibido uma lista com o tipo, o número, a seção e o assunto do documento.
- Na lista o prazo está em destaque.
- Se o documento estiver com prazo vencido a linha em questão terá um fundo vermelho.

---

### PRA (Credenciamento) - Calendário de credenciamento

**Descrição:** Controle de solicitações de credenciamento de acordo com o calendário de autorização.

**Atores:**

- Usuário lotado na SSO, com permissão para ajustar calendário de credenciamento.

**Pré-condições:**

- O calendário não está aberto.
- O usuário está autenticado e ter permissão para alterar calendário de credenciamento.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Gestão de agência**.
3. O sistema exibe a de gestão da agência.
4. O usuário clica no botão **"Janela de credenciamento"**.
5. O sistema exibe o formulário com dois campos de data: **"Data inicial"** e **"Data final"**.
6. O usuário preenche os campos e clica em **"Gravar"**.
7. O sistema redireciona para tela de Gestão da Agência e exibe modal com mensagem de sucesso.

**Pós-condições:**

- O calendário de credenciamento é atualizado com as datas preenchidas pelo usuário.
- O botão **"Solicitar credenciamento"** aparecerá na tela de Gestão da Agência de todos os usuários.

**Regras de Negócio:**

- O botão **"Solicitar credenciamento"** aparecerá apenas se o calendário estiver aberto.
- Os campos **"Data inicial"** e **"Data final"** são obrigatórios.
- Os campos **"Data inicial"** e **"Data final"** devem estar no formato DD/MM/AAAA e a data inicial deve ser menor que a data final.

**Exemplo de Interface:**

**Tela de Gestão da Agência:**

- Menu lateral com a opção Gestão da Agência.
- Botão "Janela de Credenciamento" (visível apenas para usuários nível SSO).

**Tela de Janela de Credenciamento de Agente:**

- Formulário com 2 inputs tipo data, para data inicial e data final.
- Botão "Gravar".
- Botão "Cancelar".

### PRA (Credenciamento) - Solicitação

**Descrição:** Processo inicial de solicitação de credenciamento, passando pela
criação da solicitação pela agência local, análise pelo comandante da agência e
despacho pela CoordOInt.

**Atores:**

- Membro da SOInt (Agente/analista/chefe)
- Comandante da unidade
- Chefe da CoordOInt

**Pré-condições:**

- O calendário para credenciamento está aberto.
- O usuário está autenticado e ter permissão para solicitar credenciamento.

**Fluxo Principal:**

1. Usuário membro do SOInt:

   - 1.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 1.2. O usuário clica na opção **Gestão da agência**.
   - 1.3. O botão **"Solicitar credenciamento"** está disponível e o membro clica nele.
   - 1.4. O sistema redireciona para o formulário de solicitação de credenciamento.
   - 1.5. O usuário preenche e marca os campos necessários, insere a foto e os documentos em formato PDF.
   - 1.6. O usuário clica em **"Solicitar"**.

2. Comandante da unidade:

   - 2.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 2.2. O usuário clica na opção **Gestão da agência**.
   - 2.3. O sistema exibe a tela com as solicitações da agência com um badge colorido/clicável.
   - 2.4. O usuário clica nesse badge se disponível e o sistema redireciona para a tela de assinatura.
   - 2.5. O usuário clica em **"Assinar solicitação"**.
   - 2.6. O sistema abre um modal com um botão de confirmação e recomendações.

3. Chefe da CoordOInt:
   - 3.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 3.2. O usuário clica na opção **Gestão da agência**.
   - 3.3. O sistema exibe a tela com as solicitações de todas as agências subordinadas.
   - 3.4. O usuário escolhe a solicitação e clica no badge.
   - 3.5. O sistema redireciona e exibe a tela com as informações da solicitação.
   - 3.6. O usuário clica em **"Solicitar Pesquisa Social"**.
   - 3.7. O sistema abre um modal com o campo para escolha da agência que vai realizar a pesquisa e o botão de confirmação

**Pós-condições:**

- A solicitação foi corretamente despachada para a agência de pesquisa social, com os dados e documentos em conformidade.
- Em caso de inconsistências, a solicitação é devolvida à agência solicitante para correção.

**Regras de Negócio:**

- O botão **"Solicitar Credenciamento"** só aparece se o calendário para credenciamento estiver aberto.
- Todos os campos obrigatórios do formulário devem ser preenchidos antes do envio.
- Documentos anexados devem estar no formato PDF e com tamanho máximo definido pelo sistema (e.g., 5MB).

**Exemplo de Interface:**

**Tela de Gestão da Agência (Membro):**

- Menu lateral com a opção Gestão da Agência.
- Botão "Solicitar Credenciamento" (visível apenas se o calendário estiver aberto).
- Formulário com campos tipo: Nome, CPF, imagem.

**Tela de Revisão do Comandante:**

- Listagem de solicitações pendentes.
- Visualização do texto da solicitação.
- Botão Assinar Solicitação.

**Tela de Revisão do Chefe CoordOInt:**

- Listagem de solicitações das agências.
- Visualização do formulário da solicitação.
- Botão Solicitar Pesquisa Social.

### PRA (Credenciamento) - Pesquisa social

**Descrição:** Processo de pesquisa social pela agência responsável.

**Atores:**

- Membro da SOInt (Agente)
- Chefe/Analista da SOInt
- Comandante da unidade

**Pré-condições:**

- A solicitação foi enviada pela CoordOInt para a Agência Responsável pela Pesquisa Social.
- O formulário de pesquisa está configurado e acessível no sistema.

**Fluxo Principal:**

1. Agente responsável pela pesquisa social:

   - 1.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 1.2. O usuário clica na opção **Gestão da agência**.
   - 1.3. Um agente acessa a lista de solicitações pendentes de pesquisa social.
   - 1.4. O primeiro agente que abrir a solicitação torna-se responsável pela conclusão.
   - 1.5. O usuário realiza a pesquisa social, preenche o formulário com os resultados e clica em **"Salvar pesquisa social"**

2. Chefe/Analista da SOInt:

   - 2.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 2.2. O usuário clica na opção **Gestão da agência**.
   - 2.3. O sistema exibe a tela com as solicitações da agência com um badge colorido/clicável.
   - 2.4. O usuário clica nesse badge se disponível e o sistema redireciona para a tela da pesquisa.
   - 2.5. O usuário preenche o campo "Parecer do chefe da agência" e clica em **"Concluir pesquisa social"**.
   - 2.6. O sistema abre um modal com um botão de confirmação e recomendações.

3. Comandante da unidade:
   - 3.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 3.2. O usuário clica na opção **Gestão da agência**.
   - 3.3. O sistema exibe a tela com as solicitações da agência.
   - 3.4. O usuário escolhe a solicitação e clica no badge.
   - 3.5. O sistema redireciona e exibe a tela com as informações da solicitação.
   - 3.6. O usuário clica em **"Assinar documento"**.
   - 3.7. O sistema abre um modal com um botão de confirmação e recomendações.

**Pós-condições:**

- A solicitação foi corretamente despachada para chefe, com os dados e documentos em conformidade.
- Em caso de inconsistências, a solicitação pode ser devolvida pele chefe para o agente responsável.
- O sistema redireciona o usuário para a tela escolhida.

**Regras de Negócio:**

- O badge só é clicável para cada usuário se o fluxo estiver na sua responsabilidade.
- Todos os campos obrigatórios do formulário devem ser preenchidos antes do envio.
- Somente o agente pode realizar alterações na pesquisa social.

**Exemplo de Interface:**

**Tela do agente:**

- Menu lateral com a opção Gestão da Agência.
- Lista de solicitações de pesquisa social.
- Formulário de pesquisa social

**Tela de Chefe/Analista da SOInt:**

- Listagem de solicitações pendentes.
- Visualizção dos detalhes da pesquisa e campo para parecer.
- Botão Concluir pesquisa social.

**Tela do comandante:**

- Listagem de solicitações das agências.
- Visualização dos detalhes da pesquisa.
- Botão Assinar documento.

### PRA (Credenciamento) - Despacho do comando regional

**Descrição:** Avaliação de pesquisa social e despacho do comando.

**Atores:**

- Chefe da CoordOInt
- Comandante regional

**Pré-condições:**

- A solicitação foi enviada pela unidade responsável pela pesquisa social.
- O formulário de pesquisa está configurado e acessível no sistema.

**Fluxo Principal:**

1. Chefe da CoordOInt:

   - 1.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 1.2. O usuário clica na opção **Gestão da agência**.
   - 1.3. O usuário escolhe a solicitação e clica no badge colorido/clicável se disponível.
   - 1.4. O usuário preenche o campo "Parecer do chefe da CoordOInt" e clica em **"Encaminhar ao comandante"**.
   - 1.5. O sistema abre um modal com um botão de confirmação.
   - 1.6. O sistema redireciona para a tela de Gestão da agência.

2. Comandante regional:

   - 2.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 2.2. O usuário clica na opção **Gestão da agência**.
   - 2.3. O sistema exibe a tela com as solicitações da agência com um badge colorido/clicável.
   - 2.4. O sistema redireciona para os detalhes da solicitação
   - 2.5. O usuário clica em um dos botões disponíveis **"Indeferir"** ou **"Assinar documento"**.
   - 2.6. O sistema abre um modal com um botão de confirmação e recomendações.
   - 2.7. O sistema redireciona para a tela de Gestão da agência.

**Pós-condições:**

- A solicitação foi corretamente despachada para o chefe, com os dados e documentos em conformidade.
- Se o comandante clicar em **""Indeferir""**, o sistema redireciona para a tela de Gestão da agência e encerra o processo.
- Indeferido: Aparecerá para todos os usuários interessados um bagde vermelho com a mensagem "Indeferido".
- Se o comandante clicar em **"Assinar documento""**, o sistema redireciona para a tela de Gestão da agência e enviar o processo o COInt.

**Regras de Negócio:**

- O badge só é clicável para o usuário se o fluxo estiver na sua responsabilidade.
- Todos os campos obrigatórios do formulário devem ser preenchidos antes do envio.
- Somente o chefe do CoordOInt pode acessar o processo.
- Somente o comandante pode indeferir ou assinar o documento.

**Exemplo de Interface:**

**Tela do chefe da CoordOInt:**

- Menu lateral com a opção Gestão da Agência.
- Lista de solicitações de credenciamento/descredenciamento.
- Formulário de detalhes da pesquisa social e campo para Parecer
- Botão "Encaminhar ao comandante"

**Tela do comandante:**

- Menu lateral com a opção Gestão da Agência.
- Lista de solicitações de credenciamento/descredenciamento.
- Formulário com os detalhes da solicitação
- Botões de "Indeferir" e "Assinar documento"

### Descredenciamento

**Descrição:** Processo de descredenciamento de agente/usuário do sistema

**Atores:**

- Comandante do agente
- Comandante regional
- COInt

**Pré-condições:**

- A solicitação foi realizada pelo comandante do agente.

**Fluxo Principal:**

1. Comandante da unidade:

   - 1.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 1.2. O usuário clica na opção **Efetivo SinPoM**.
   - 1.3. O sistema exibe uma lista com todos agente do sistema.
   - 1.4. O usuário clica em **"Descredenciar**.
   - 1.5. O sistema abre um modal com um botão de confirmação e campo para informar o motivo.
   - 1.6. O sistema redireciona para a tela inicial

2. Comandante regional:

   - 2.1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
   - 2.2. O usuário clica na opção **Gestão da agência**.
   - 2.3. O sistema exibe a tela com as solicitações da agência com um badge colorido/clicável.
   - 2.4. O usuário clica na opção adequada.
   - 2.5. O sistema redireciona para os detalhes da solicitação.
   - 2.6. O usuário clica no botão **"Assinar solicitação"**.
   - 2.7. O sistema abre um modal com um botão de confirmação.
   - 2.8. O sistema redireciona para a tela de Gestão da agência.

**Pós-condições:**

- A solicitação foi corretamente despachada exibindo o status atual da solicitação.
- Após descredenciamento do COInt o usuário descredenciado não conseguirá mais acessar o sistema.

**Regras de Negócio:**

- O badge só é clicável para o usuário se o fluxo estiver na sua responsabilidade.
- Somente o comandante da unidade pode inicial o processo de descredenciamento.
- Somente o COInt conseguirá descredenciar o agente e remover o acesso do usuário.

**Exemplo de Interface:**

**Tela do comandante da unidade:**

- Menu lateral com a opção Efetivo SinPoM.
- Lista de usuários cadastrados com botão "Descredenciar" disponível.

**Tela do comandante regional:**

- Menu lateral com a opção Gestão da Agência.
- Lista de solicitações de credenciamento/descredenciamento.
- Formulário com os detalhes da solicitação
- Botão de "Assinar solicitação"

### Dados da OPM

**Descrição:** Exibir e modificar os dados da agência cadastrados no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Recursos** no menu lateral esquerdo.
2. O usuário clica na opção **Dados da OPM**.
3. O sistema exibe uma tela com os dados da agência.
4. O usuário pode alterar ou adicionar informações nos campos disponíveis.
5. O usuário clica no botão **"Salvar"**.
6. O sistema redireciona o usuário para a tela principal do sistema e exibe um modal de sucesso.

**Fluxo Alternativo:**

- **F1:** O usuário não faz alterações nos campos e sai da tela.

1. Os passos anteriores seguem o fluxo principal (passos 1-3).
2. O usuário clica em qualquer outra opção do menu lateral.
3. O sistema redireciona o usuário para a tela escolhida.

**Pós-condições:**

- O sistema exibe os dados da agência ao qual o usuário está registrado.

**Regras de Negócio:**

- O usuário só pode visualizar e editar os dados da sua agência.

**Exemplo de Interface:**

- No inicio da página são exibidos o nome da agência, comandante, subcomandante, Analista/Chefe da SOInt.
- Abaixo são mostrados campos com os dados da agência que podem ser modificados.
- No final da tela é exibido o botão **"Salvar"**.

---

## Nova ocorrência

**Descrição:** Cadastro de nova ocorrência no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para criar novas ocorrências.

**Fluxo Principal:**

1. O usuário acessa a seção **Ocorrências** no menu lateral esquerdo.
2. O usuário clica na opção **Nova**.
3. O sistema exibe uma tela com um select com os tipos de ocorrências.
4. O usuário escolhe o tipo de ocorrência.
5. O sistema então cria a ocorrência e redireciona para a tela do formulário adequado.
6. O usuário preenche os campos obrigatórios e se possível os campos opcionais.
7. Caso exista entidades o usuário deve clicar no botão correspondente **"Pessoa"**, **"Veículo"**, **"Arma"**
8. O sistema abre o modal com o formulário da entidade, que poderá ser criada uma nova ou aproveitada uma
9. O usuário clica no botão **"Salvar"**.
10. O sistema atualiza a página confirmando o sucesso da operação.

**Fluxo Alternativo:**

- **F1:** O usuário desiste de criar a ocorrência.

  1.  Os passos anteriores seguem o fluxo principal (passos 1-5).
  2.  O usuário precisa clicar em **"Excluir"** para que a ocorrência seja apagada do sistema.
  3.  O sistema abre um modal para confirmação do usuário.
  4.  O sistema redireciona para a tela de escolha do tipo de nova ocorrência.

- **F2:** O usuário não faz alterações nos campos e sai da tela.

  1.  Os passos anteriores seguem o fluxo principal (passos 1-5).
  2.  A ocorrência foi criada mas naõ tem as informações necessárias.
  3.  O usuário clica em qualquer outra opção do menu lateral.
  4.  O sistema redireciona o usuário para a tela escolhida.

**Pós-condições:**

- A ocorrência foi corretamente criada.
- O sistema exibe o formulário adequado ao tipo de ocorrência selecionado.
- O campo com tipo de ocorrência no formulário não pode alterado pelo usuário.
- A ocorrência excluída não deve aparecer na listagem de ocorrências.
- A ocorrência não finalizada não aparece na lista de ocorrências.

**Regras de Negócio:**

- Em cada formulário existem campos de preenchimento obrigatório.

**Exemplo de Interface:**

- Na primeira tela um select de tipo de ocorrência **"Selecione o tipo de ocorrência"**
- No formulário campos de select como **Unidade da área onde ocorreu o fato**, **Cidade**, **Zona**.
- No formulário campos do tipo input, textarea e date picker e um mapa para adição de marcadores.
- No final da tela é exibido o botão **"Salvar"** e o botão **"Excluir"**.

---

## Listar ocorrências

**Descrição:** Lista as ocorrências registradas no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.
- O usuário tem permissão para visualizar as ocorrências.

**Fluxo Principal:**

1. O usuário acessa a seção **Ocorrências** no menu lateral esquerdo.
2. O usuário clica na opção **Listar**.
3. O sistema exibe uma tela com um opção de filtros e a listagem de ocorrências disponíveis.
4. O usuário clica em uma das ocorrências.
5. O sistema redireciona para a tela de detalhes da ocorrência.
6. Se disponível o usuário pode clicar nas entidades e visualizar os dados por um modal.

**Pós-condições:**

- O sistema exibe listagem de ocorrências de acordo com o nível de usuário.
- O sistema exibe os detalhes de acordo com o clique do usuário.
- O sistema exibe as entidades em links clicáveis para abertura do modal.
- O sistema exibe um mapa que pode ter marcadores de localização.

**Regras de Negócio:**

- O usuário só pode visualizar as ocorrências da sua agência ou agências subordinadas.
- O botão de **"Editar"** só está disponível para o usuário da sua agência.

**Exemplo de Interface:**

- Na primeira tela temos os inputs para filtragem de ocorrência
- Logo abaixo a listagem com as ocorrências cadastradas.
- Na tela de detalhes os dados da ocorrência e um mapa.
- Caso o usuário tenha permissão no final após o mapa deve ter um botão de **"Editar"**.

---

## Tutorial

**Descrição:** Exibir os tutoriais para uso do sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Tutorial** no menu lateral esquerdo.
2. O sistema exibe uma tela com os cards de cada tutorial, com o título e o player de vídeo.

**Pós-condições:**

- O sistema exibe players de video do youtube, é possível assistir nessa tela ou redirecionar para o youtube.

**Regras de Negócio:**

**Exemplo de Interface:**

- Cards brancos com sombreamento com o título e o player de video.

---

## Ajuda

**Descrição:** Solicitar ajuda no sistema.

**Atores:** Usuário

**Pré-condições:**

- O usuário está autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a seção **Ajudar** no menu lateral esquerdo.
2. O sistema exibe uma tela com os dados da agência.
3. O usuário escolhe o tipo de solicitação ou sugestão no campo adequado.
4. O usuário preencher o textarea da descrição.
5. O usuário clica no botão **"Gravar"**.
6. O sistema exibe logo acima do formulário os chamados, inclusive o chamado aberto.

**Pós-condições:**

- O sistema exibe os chamados com o tipo, a data, o status a descrição.
- Se houver resposta o sistema exibe a resposta.

**Regras de Negócio:**

- O usuário só visualiza os chamados criado por ele mesmo.

**Exemplo de Interface:**

- Título da página e descrição da página.
- Logo o após a lista com todos so chamdos criados.
- Formulário para abertura de novo chamado.
- Botão de **"Gravar"** e **"Voltar"**.

---
