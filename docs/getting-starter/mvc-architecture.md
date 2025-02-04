---
sidebar_position: 3
---

# Arquitetura MVC

## Arquitetura do Projeto

O SINPOM utiliza uma arquitetura **MVC (Model-View-Controller)** que é o padrão adotado pelo framework Laravel.

## Controllers

### Controller

Controlador base do sistema que é estendido por outros controllers. Fornece funcionalidades essenciais de autorização, despacho de jobs e validação de requisições para as classes que o utilizam.

#### Métodos Principais

- **Autorizações:** O controller herda o trait `AuthorizesRequests`, que permite a autorização de ações de usuários no sistema.
- **Despacho de Jobs:** O controller herda o trait `DispatchesJobs`, que permite o despacho de jobs para a fila de tarefas do sistema.
- **Validação de Requisições:** O controller herda o trait `ValidatesRequests`, que permite a validação de dados nas requisições HTTP recebidas.

#### Dependências

- **AuthorizesRequests:** Trait que fornece métodos para autorizar ações de usuários, garantindo que apenas usuários com permissões adequadas possam executar ações específicas.
- **DispatchesJobs:** Trait que permite o envio de jobs para a fila de tarefas, facilitando o processamento assíncrono de tarefas.
- **ValidatesRequests:** Trait que fornece métodos para validar dados de requisições HTTP, garantindo que os dados recebidos estejam no formato correto.

> **Padrão de Design Utilizado:** MVC, com o controller base oferecendo funcionalidades essenciais de autorização, despacho de jobs e validação de requisições.

---

### PainelController

Gerencia o painel do usuário, ações relacionadas ao perfil e visualizações condicionais de acordo com as permissões do usuário.

#### Key Methods

- `index(Request $request)`: Exibe painel dashboard ou redireciona com base nas permissões do usuário
- `tutorial(Request $request)`: Exibe a página de tutorials para o usuário.

#### Dependencies

- `CustomQueries`: Recupera dados de consultas personalizadas, como ocorrências por tipo.
- `Google2FA`: Usado para autenticação de dois fatores (não é utilizado ativamente no método index(), mas é referenciado).
- `Carbon`: Gerencia cálculos de datas, especialmente para o ano atual.
- `News`: Recupera notícias para exibição no painel.
- `PriorityTarget`: Obtém alvos prioritários para exibição.
- `Auth`: Gerencia o usuário autenticado.
- `Crypt`: Criptografa dados sensíveis.
- `Staff`: Recupera informações de perfil do usuário para verificações de dados adicionais.

---

### AclController

Gerencia a atribuição de funções e permissões de usuários no sistema. Permite ações como listar usuários, exibir detalhes de usuários e gerenciar funções e permissões.

#### Métodos Principais

- **index(Request $request):** Retorna e exibe uma lista paginada de usuários, filtrada por função e permissões. Implementa lógica para diferentes níveis de permissão, como "Autorizar usuários todos níveis" e "Gerenciar usuários CPR".
- **show(Request $request, $id):** Exibe os detalhes de um usuário específico, incluindo suas funções e a estrutura organizacional (OPM). Verifica permissões antes de permitir o acesso.
- **token(Request $request):** Exibe a página de geração de token para um membro específico da equipe, permitindo a criação de um código de verificação.
- **storetoken(Request $request):** Cria ou atualiza o código de verificação para um agente, e envia o código para o e-mail do agente. Inclui uma verificação para garantir que o agente não esteja duplicado no sistema.
- **update(Request $request, $id):** Atualiza a função de um usuário. Inclui verificações para impedir a duplicação de funções em uma mesma unidade (ex: Chefe ou Analista - SOInt). Trata casos especiais como "descredenciamento" de agentes.
- **destroy($id):** Realiza a exclusão suave de um usuário, removendo a função atribuída ao usuário e gerenciando o histórico de status (como descredenciamento).

#### Dependências

- **User:** Modelo que representa os usuários no sistema. Manipula as funções e permissões atribuídas a cada usuário.
- **Role:** Modelo que gerencia as funções atribuídas aos usuários, verificando permissões e implementando regras de acesso.
- **Staff:** Representa os detalhes de cada membro da equipe, incluindo suas funções, hierarquia e status.
- **AgentStatusLog:** Registra as mudanças de status dos agentes, como credenciamento e descredenciamento.
- **CodeVerification:** Responsável pela criação e validação de códigos de verificação usados em diversas operações no sistema.
- **CustomQueries:** Contém consultas personalizadas que são usadas para gerar as listas de usuários, filtradas por função e status.
- **AgentRequestForInclusion:** Modelo que gerencia solicitações para inclusão de agentes em processos específicos, como credenciamento ou descredenciamento.
- **Mail:** Utilizado para enviar e-mails, como o envio de tokens de verificação aos usuários.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### AgentController

Gerencia as operações relacionadas aos agentes, como listar agentes, exibir detalhes, credenciamento e controle de solicitações de inclusão. Permite ações de filtragem e permissões específicas para diferentes níveis de acesso.

#### Métodos Principais

- **index(Request $request):** Retorna e exibe uma lista paginada de agentes, filtrada por função e permissões. Implementa lógica para diferentes níveis de permissão, como "Ver todos agentes" e "Ver agentes CPR".
- **listar(Request $request):** Lista os agentes de acordo com as permissões do usuário, com suporte para filtrar por OPM ou ID de staff.
- **credenciamento(Request $request):** Exibe os agentes com credenciamento solicitado, filtrados de acordo com as permissões do usuário e a estrutura da OPM.

#### Dependências

- **Staff:** Modelo que representa os agentes e seus dados relacionados, como informações de staff e funções.
- **User:** Modelo que representa os usuários do sistema, incluindo permissões e funções.
- **Role:** Modelo que gerencia as funções atribuídas aos usuários e agentes.
- **Opm:** Modelo que representa as unidades da Polícia Militar e suas estruturas.
- **AgentRequestForInclusion:** Modelo que gerencia as solicitações de inclusão de agentes em processos, como credenciamento.
- **AgentStatusLog:** Registra as mudanças de status dos agentes, como credenciamento ou descredenciamento.
- **AgentFis, AgentPesquisaSocial, Decision, Document, Signature:** Modelos adicionais envolvidos nas operações relacionadas ao gerenciamento de agentes.
- **Mail:** Usado para enviar notificações de credenciamento e atualizações.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### DocumentController

Gerencia as operações relacionadas aos documentos, incluindo a caixa de entrada e saída, o encaminhamento e a tramitação de documentos, além da busca e do controle de prazos.

#### Métodos Principais

- **index(Request $request):** Retorna e exibe uma lista de documentos na caixa de entrada, com base nas permissões do usuário. Implementa lógica para diferentes permissões, como "Tramitar documentos" e "Ver documentos enviados para OPM".
- **search(Request $request):** Realiza uma busca detalhada de documentos com base em critérios como texto, data e difusão. Permite filtrar documentos de acordo com a seção que criou ou recebeu o documento.
- **caixadesaida(Request $request):** Exibe os documentos na caixa de saída, incluindo aqueles que foram criados, enviados ou encaminhados pelo usuário.
- **prazos_externos(Request $request):** Exibe documentos com prazos externos, filtrados de acordo com a data.
- **prazos(Request $request):** Exibe documentos com prazos internos, filtrados de acordo com a data.
- **stopValidAt(Request $request):** Finaliza a resposta de um documento específico, caso o usuário tenha permissão para isso.

#### Dependências

- **DocumentControl:** Modelo que gerencia os controles de documentos, incluindo a entrada e saída de documentos e seu encaminhamento.
- **Document:** Modelo que representa os documentos e suas informações principais.
- **OpmStructure:** Modelo que representa as estruturas das unidades da Polícia Militar.
- **Attachment:** Modelo utilizado para anexar arquivos aos documentos.
- **DocumentTracking:** Registra o histórico de movimentação de documentos.
- **Mail:** Utilizado para enviar notificações e atualizações sobre o status dos documentos.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### EntityFirearmController

Gerencia as operações relacionadas às armas de fogo registradas em entidades, incluindo a inclusão, consulta, edição e atualização de informações sobre armas, bem como a associação com pessoas e ocorrências.

#### Métodos Principais

- **store(Request $request):** Cria um novo registro de arma de fogo e associa pessoas e ocorrências a ela. Salva os dados da arma e gerencia o relacionamento com os envolvidos.
- **consultaarma(Request $request):** Consulta informações sobre uma arma de fogo registrada, incluindo os detalhes do tipo, fabricante, calibre, propriedade e identificação legível, além de listar as pessoas associadas à arma em uma ocorrência ou documento.
- **edit(Request $request, $id):** Exibe a página de edição de uma arma de fogo, carregando os dados da arma, fabricantes, calibres e pessoas associadas à arma em ocorrências ou documentos.
- **update(Request $request, $id):** Atualiza os dados de uma arma de fogo registrada e suas associações, incluindo a remoção de vínculos de pessoas associadas, quando necessário.
- **removevinculo(Request $request):** Remove a associação de uma pessoa com uma arma de fogo registrada, excluindo o vínculo na tabela de envolvimentos.

#### Dependências

- **EntityFirearm:** Modelo que representa as armas de fogo registradas nas entidades, incluindo detalhes como tipo, fabricante e número de série.
- **EntityFirearmInvolvement:** Modelo que gerencia o relacionamento entre as armas de fogo e as ocorrências ou documentos aos quais estão associadas.
- **EntityPeopleHasEntityFirearm:** Modelo que gerencia o relacionamento entre pessoas e as armas de fogo registradas.
- **Occurrence:** Modelo que representa as ocorrências relacionadas às armas de fogo, como apreensões ou investigações.
- **Document:** Modelo que representa os documentos relacionados às armas de fogo, como relatórios e registros oficiais.
- **FirearmType, FirearmManufacturer, FirearmCaliber, FirearmOwner, FirearmSerialNumberStatus:** Modelos que fornecem os dados sobre tipos de armas, fabricantes, calibres, proprietários e status de números de série das armas de fogo.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### EntityPeopleController

Gerencia as operações relacionadas às pessoas registradas nas entidades, incluindo a importação de dados, criação, atualização, e gerenciamento de informações pessoais, como apelidos, endereços, envolvimentos e documentos.

#### Métodos Principais

- **readCsv():** Realiza a leitura e importação de dados a partir de um arquivo CSV, criando registros de pessoas, seus apelidos, endereços, e associações com facções e crimes.
- **store(Request $request):** Cria uma nova entidade pessoa a partir dos dados fornecidos na requisição, incluindo a criação de apelidos, endereços, e associações com facções, crimes e documentos.
- **mandadoShow(Request $request, $id):** Exibe o mandado de prisão associado a uma pessoa, permitindo o download do arquivo correspondente.
- **mandadoDelete(Request $request, $id):** Exclui o mandado de prisão associado a uma pessoa, removendo o arquivo do sistema e apagando o registro do banco de dados.

#### Dependências

- **EntityPeople:** Modelo que representa as pessoas registradas nas entidades, incluindo informações como nome, CPF, RG, gênero, e data de nascimento.
- **EntityPeopleApelido:** Modelo que gerencia os apelidos das pessoas registradas.
- **EntityPeopleAddress:** Modelo que gerencia os endereços das pessoas registradas.
- **EntityPeopleCrime:** Modelo que gerencia as associações entre as pessoas e os crimes em que estão envolvidas.
- **Faccao:** Modelo que representa as facções às quais as pessoas podem estar associadas.
- **EntityPeoplePriorityLevel:** Modelo que representa os níveis de prioridade das pessoas registradas.
- **EntityPeopleMarkKind, EntityPeopleMarkLocation:** Modelos que gerenciam as características e localizações das marcas associadas às pessoas.
- **Document:** Modelo que representa os documentos associados às pessoas registradas.
- **EntityPeopleArrestWarrant:** Modelo que gerencia os mandados de prisão associados às pessoas.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

---

### EntityVehicleController

Gerencia as operações relacionadas aos veículos registrados em entidades, incluindo a inclusão, consulta, edição e atualização de informações sobre veículos, bem como a associação com pessoas e ocorrências.

#### Métodos Principais

- **store(Request $request):** Cria um novo registro de veículo e associa pessoas e ocorrências a ele. Salva os dados do veículo e gerencia o relacionamento com os envolvidos.
- **consultaveiculo(Request $request):** Consulta informações sobre um veículo registrado, incluindo os detalhes do tipo, modelo, cor, placa e RENAVAN, além de listar as pessoas associadas ao veículo em uma ocorrência ou documento.
- **edit(Request $request, $id):** Exibe a página de edição de um veículo, carregando os dados do veículo, tipos, cores e pessoas associadas ao veículo em ocorrências ou documentos.
- **update(Request $request, $id):** Atualiza os dados de um veículo registrado e suas associações, incluindo a remoção de vínculos de pessoas associadas, quando necessário.
- **removevinculo(Request $request):** Remove a associação de uma pessoa com um veículo registrado, excluindo o vínculo na tabela de envolvimentos.

#### Dependências

- **EntityVehicle:** Modelo que representa os veículos registrados nas entidades, incluindo detalhes como tipo, modelo, cor, placa e RENAVAN.
- **EntityVehicleInvolvement:** Modelo que gerencia o relacionamento entre os veículos e as ocorrências ou documentos aos quais estão associados.
- **EntityPeopleHasEntityVehicle:** Modelo que gerencia o relacionamento entre pessoas e os veículos registrados.
- **VehicleKind:** Modelo que representa os tipos de veículos.
- **VehicleColor:** Modelo que representa as cores dos veículos.
- **Occurrence:** Modelo que representa as ocorrências relacionadas aos veículos, como apreensões ou investigações.
- **Document:** Modelo que representa os documentos relacionados aos veículos, como relatórios e registros oficiais.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### ExportController

Gerencia as operações de exportação de dados para arquivos CSV, permitindo a exportação de informações relacionadas às pessoas registradas nas entidades.

#### Métodos Principais

- **peopleCsv():** Exporta os dados das pessoas registradas para um arquivo CSV. O método recupera os registros de pessoas e gera um arquivo com informações como nome, CPF, data de nascimento, área de atuação, facção associada, e status atual.

#### Dependências

- **EntityPeople:** Modelo que representa as pessoas registradas nas entidades, incluindo informações como nome, CPF, data de nascimento e associações com facções e status.
- **SimpleExcelWriter:** Classe utilizada para criar e escrever no arquivo CSV.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### FaccaoController

Gerencia as operações relacionadas às facções criminosas registradas no sistema, incluindo a criação, edição, listagem e exclusão de facções, bem como o registro de informações criminais e geográficas associadas.

#### Métodos Principais

- **index(Request $request):** Exibe uma lista paginada de facções, restrita a usuários com permissões específicas. Apenas usuários autorizados pela "Segurança pública e ouvidoria" podem acessar esta funcionalidade.
- **create(Request $request):** Exibe o formulário para criar uma nova facção, disponível apenas para usuários com permissões adequadas.
- **edit(Request $request, $id):** Exibe o formulário de edição para uma facção existente, permitindo alterar informações como nome. Disponível apenas para usuários autorizados.
- **update(Request $request, $id):** Atualiza os dados de uma facção existente e verifica se o nome informado já está registrado. Caso o nome já exista, um erro é retornado.
- **store(Request $request):** Armazena uma nova facção no banco de dados, após verificar se uma facção com o mesmo nome já existe.
- **logocrim(Request $request):** Exibe as informações relacionadas aos logos criminais registrados, com filtros para facção, tipo de comunicação criminal, e outras variáveis.
- **logocrimCreate(Request $request):** Exibe o formulário para criar um novo logo criminal, permitindo incluir dados como facção, tipo de crime, e informações adicionais.
- **logocrimStore(Request $request):** Armazena um novo logo criminal, incluindo anexos e imagens relacionadas.
- **logocrimImage($path):** Realiza o download de imagens associadas aos logos criminais.
- **logocrimAnexo($path):** Realiza o download de anexos associados aos logos criminais.
- **logocrimEdit(Request $request, $id):** Exibe o formulário de edição para um logo criminal existente.
- **logocrimImagePath(Request $request, $id):** Retorna o caminho da imagem associada a um logo criminal.

#### Dependências

- **Faccao:** Modelo que representa as facções criminosas registradas no sistema, com informações como nome e associações a outras entidades.
- **LogoCrimInfo:** Modelo que gerencia as informações relacionadas aos logos criminais, incluindo imagens, anexos e geolocalização.
- **CrimeCommunicationKind, CrimeConnotation, CrimeInformationSource:** Modelos que representam diferentes aspectos da comunicação e conotação dos crimes, bem como suas fontes de informação.
- **State, City:** Modelos que representam estados e cidades, utilizados para geolocalização de eventos criminosos.
- **Prison:** Modelo que representa as prisões associadas aos crimes registrados.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### GeolocationController

Gerencia as operações relacionadas à geolocalização de IPs, retornando a cidade e as coordenadas geográficas associadas ao endereço de IP do usuário.

#### Métodos Principais

- **search(Request $request):** Obtém o endereço de IP do usuário e, com base nesse IP, consulta a localização geográfica utilizando a API `IPInfoDB`. Retorna as coordenadas geográficas (latitude e longitude) associadas ao IP. Caso não seja possível determinar a localização, retorna valores padrão de latitude e longitude.

#### Dependências

- **IPInfoDB:** Serviço utilizado para consultar informações de geolocalização a partir do endereço de IP.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### HomeController

Controlador responsável pela exibição da página inicial do sistema, garantindo que o usuário esteja autenticado antes de acessar a dashboard.

#### Métodos Principais

- **__construct():** Construtor que aplica o middleware de autenticação, garantindo que o usuário esteja autenticado para acessar os métodos deste controller.
- **index():** Exibe a página inicial da aplicação, renderizando a view `home`.

#### Dependências

- **Auth:** Middleware que garante que apenas usuários autenticados possam acessar os métodos do controller.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### ImprovementCourseController

Gerencia as operações relacionadas aos cursos de aperfeiçoamento, incluindo a criação, edição, listagem e atualização de cursos registrados no sistema.

#### Métodos Principais

- **index(Request $request):** Exibe a lista de cursos de aperfeiçoamento, com suporte para filtro por nome ou sigla. O acesso é restrito a usuários da "Coordenação de Contrainteligência".
- **edit(Request $request, $id):** Exibe o formulário de edição de um curso de aperfeiçoamento existente, permitindo a alteração de dados como sigla, nome e órgão. O acesso é restrito a usuários autorizados.
- **update(Request $request, $id):** Atualiza as informações de um curso de aperfeiçoamento existente no sistema.
- **create(Request $request):** Exibe o formulário para criação de um novo curso de aperfeiçoamento. O acesso é restrito a usuários da "Coordenação de Contrainteligência".
- **store(Request $request):** Cria um novo curso de aperfeiçoamento no sistema, com base nos dados fornecidos no formulário. O acesso é restrito a usuários autorizados.

#### Dependências

- **ImprovementCourse:** Modelo que representa os cursos de aperfeiçoamento, incluindo informações como sigla, nome e órgão responsável.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### OccurrenceController

Gerencia as operações relacionadas às ocorrências registradas no sistema, incluindo a criação, edição, listagem, atualização e exclusão de ocorrências, bem como o gerenciamento de geolocalização e envolvimento de pessoas, veículos e armas.

#### Métodos Principais

- **create(Request $request):** Exibe o formulário para criação de uma nova ocorrência, disponível apenas para usuários com permissão para registrar ocorrências.
- **store(Request $request):** Cria uma nova ocorrência e a armazena no banco de dados, criando também os tipos de envolvimento associados à ocorrência.
- **edit(Request $request, $id):** Exibe o formulário de edição para uma ocorrência existente, permitindo a modificação de seus dados e o gerenciamento de envolvimentos.
- **update(Request $request, $id):** Atualiza os dados de uma ocorrência existente, incluindo a geolocalização e o envolvimento de pessoas, veículos e armas.
- **listar(Request $request):** Exibe uma lista de ocorrências filtradas por diferentes critérios, dependendo das permissões do usuário (como "Consultar ocorrências locais" ou "Consultar ocorrências gerais").
- **show(Request $request, $id):** Exibe os detalhes de uma ocorrência específica, incluindo suas coordenadas de geolocalização.
- **checkage(Request $request):** Verifica se a ocorrência foi registrada dentro de um intervalo aceitável de tempo (30 dias).
- **destroy($id):** Exclui uma ocorrência e seus envolvimentos, caso o usuário tenha permissões adequadas.

#### Dependências

- **Occurrence:** Modelo que representa as ocorrências registradas, incluindo informações como data, hora, local, envolvidos e descrição.
- **OccurrenceKindInvolved:** Modelo que representa os tipos de envolvimento em uma ocorrência.
- **OccurrenceGeolocation:** Modelo que representa a geolocalização de uma ocorrência.
- **EntityPeopleInvolvement, EntityVehicleInvolvement, EntityFirearmInvolvement:** Modelos que gerenciam os envolvimentos de pessoas, veículos e armas nas ocorrências.
- **WeaponKind, FirearmType, FirearmManufacturer, FirearmCaliber:** Modelos que representam as armas envolvidas nas ocorrências.
- **PeopleColor, VehicleKind, VehicleColor:** Modelos que representam as características das pessoas e veículos envolvidos nas ocorrências.
- **Motivacao, Faccao, Zona, MeiosAmeaca, Motivacao:** Modelos que fornecem informações sobre a motivação e as características das ocorrências.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### OpmController

Gerencia as operações relacionadas às OPMs (Unidades da Polícia Militar), incluindo a edição de informações da OPM, a exibição de dados de governança, e o gerenciamento dos usuários associados a cada OPM.

#### Métodos Principais

- **edit(Request $request, $id):** Exibe o formulário de edição para uma OPM existente, permitindo alterar informações relacionadas à OPM, como endereço, telefone e e-mail. O acesso é restrito a usuários com permissões adequadas.
- **update(Request $request, $id):** Atualiza os dados de uma OPM existente, incluindo as informações de governança, como coordenadores e contatos.
- **governing(Request $request):** Exibe as informações de governança para uma OPM específica, incluindo a listagem de usuários associados a essa OPM, com base nas permissões do usuário.

#### Dependências

- **Opm:** Modelo que representa as Unidades da Polícia Militar e suas informações principais.
- **OpmGoverning:** Modelo que gerencia as informações de governança de cada OPM, incluindo detalhes como endereço, telefone e coordenadores.
- **User:** Modelo que representa os usuários associados à OPM, incluindo suas permissões e funções.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### PainelController

Gerencia as operações relacionadas ao painel principal do sistema, incluindo a visualização de informações gerais sobre ocorrências, alvos prioritários, e avisos. Controla o acesso ao painel com base nas permissões do usuário e realiza verificações sobre dados cadastrais e status.

#### Métodos Principais

- **index(Request $request):** Exibe o painel principal do sistema, com informações sobre ocorrências agrupadas por tipo, avisos recentes e alvos prioritários. O acesso é controlado por permissões específicas, incluindo a visualização de um painel personalizável e de dados específicos de unidades de operação (OPMs).
- **tutorial(Request $request):** Exibe o tutorial de uso do painel, com instruções para o usuário.

#### Dependências

- **CustomQueries:** Classe responsável por executar consultas personalizadas, como contagem de agentes e ocorrências.
- **News:** Modelo que representa as notícias e avisos do sistema, incluindo categorias específicas de avisos.
- **PriorityTarget:** Modelo que gerencia os alvos prioritários, incluindo informações sobre a pessoa e sua situação.
- **Staff:** Modelo que representa os funcionários associados às OPMs, incluindo seus dados e informações adicionais.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### QueryController

Gerencia as consultas complexas no sistema, incluindo a contagem de ocorrências por tipo, por OPM, e por período. Também lida com a busca de pessoas e o gerenciamento de suas informações, como nome, apelido, documentos e envolvimentos.

#### Métodos Principais

- **countoccurrencesbykindallopmjson($dataInicial, $dataFinal):** Retorna a contagem de ocorrências agrupadas por tipo dentro de um intervalo de datas.
- **countoccurrencesbyopm($dataInicial, $dataFinal):** Retorna a contagem de ocorrências agrupadas por OPM e CPR dentro de um intervalo de datas.
- **counthomicidiosbyopm($dataInicial, $dataFinal):** Retorna a contagem de homicídios ocorridos em uma OPM dentro de um intervalo de datas.
- **entidadepessoa(Request $request):** Exibe a página de pesquisa de pessoas, com filtros como nome, apelido, matrícula de PM, e outros critérios relacionados.
- **entidadepessoasearch(Request $request):** Realiza a pesquisa de pessoas no sistema, filtrando por diversos campos como nome, CPF, RG, área de atuação, entre outros.
- **consultaentidadepessoa(Request $request):** Retorna os dados detalhados de uma pessoa, incluindo registros de ocorrências e informações associadas, como documentos e armas envolvidas.

#### Dependências

- **Occurrence:** Modelo que representa as ocorrências registradas no sistema.
- **EntityPeople:** Modelo que representa as pessoas registradas no sistema.
- **EntityPeopleInvolvement:** Modelo que gerencia o envolvimento de pessoas em ocorrências.
- **Faccao:** Modelo que representa as facções criminosas associadas às pessoas.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### ResourceGadgetController

Gerencia as operações relacionadas aos recursos de equipamentos, incluindo a exibição de gadgets (equipamentos) registrados, a criação, edição e atualização de informações de equipamentos, e o gerenciamento de imagens associadas a esses gadgets.

#### Métodos Principais

- **index(Request $request):** Exibe a lista de equipamentos registrados, filtrados por tipo de gadget e condição, com base nas permissões do usuário (OPM ou CPR).
- **create(Request $request):** Exibe o formulário para criar um novo equipamento, disponível apenas para usuários com a permissão de cadastrar equipamentos.
- **store(Request $request):** Armazena um novo equipamento no banco de dados, incluindo a criação de imagens associadas ao gadget.
- **show(Request $request, $id):** Exibe os detalhes de um equipamento específico.
- **image($filename):** Retorna a imagem associada ao equipamento para download.
- **edit(Request $request, $id):** Exibe o formulário de edição para um equipamento existente, permitindo a atualização dos dados e imagens associadas.
- **update(Request $request, $id):** Atualiza os dados de um equipamento existente, incluindo a remoção de imagens antigas e a adição de novas imagens.
- **destroy(Request $request, $id):** Exclui um equipamento e suas imagens associadas do banco de dados.

#### Dependências

- **ResourceGadget:** Modelo que representa os gadgets (equipamentos) registrados no sistema, com informações como marca, modelo, e condições.
- **GadgetKind:** Modelo que representa os tipos de gadgets registrados.
- **GadgetCondition:** Modelo que representa as condições dos gadgets, como "Novo", "Usado", etc.
- **ResourceGadgetImage:** Modelo que gerencia as imagens associadas aos gadgets.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### ResourceVehicleController

Gerencia as operações relacionadas aos veículos registrados, incluindo a criação, edição, atualização, exibição e exclusão de veículos, bem como o gerenciamento de imagens associadas a esses veículos.

#### Métodos Principais

- **index(Request $request):** Exibe a lista de veículos registrados, com filtros por OPM, placa, condição do veículo e outros critérios. O acesso é controlado por permissões específicas, como "Ver veículos da OPM", "Ver veículos do CPR" ou "Ver veículos todos".
- **create(Request $request):** Exibe o formulário para criação de um novo veículo, disponível apenas para usuários com a permissão de cadastrar veículos.
- **store(Request $request):** Cria um novo veículo no banco de dados e armazena informações sobre o tipo, modelo, cor e condição do veículo, além de salvar imagens associadas.
- **show(Request $request, $id):** Exibe os detalhes de um veículo específico.
- **image($filename):** Retorna a imagem associada ao veículo para download.
- **edit(Request $request, $id):** Exibe o formulário de edição para um veículo existente, permitindo a atualização dos dados e das imagens associadas.
- **update(Request $request, $id):** Atualiza os dados de um veículo existente e suas imagens associadas, removendo as imagens antigas, se necessário.
- **destroy(Request $request, $id):** Exclui um veículo e suas imagens associadas do banco de dados.

#### Dependências

- **ResourceVehicle:** Modelo que representa os veículos registrados, incluindo informações como tipo, modelo, cor, placa e condição.
- **VehicleKind:** Modelo que representa os tipos de veículos.
- **VehicleColor:** Modelo que representa as cores dos veículos.
- **VehicleCondition:** Modelo que representa as condições dos veículos.
- **ResourceVehicleImage:** Modelo que gerencia as imagens associadas aos veículos.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### ResourceWarController

Gerencia as operações relacionadas aos armamentos registrados no sistema, incluindo a criação, edição, listagem e exclusão de armas, bem como o gerenciamento das condições e tipos de armamento.

#### Métodos Principais

- **index(Request $request):** Exibe a lista de armamentos registrados, com filtros por OPM, tipo de armamento, fabricante, e condição. O acesso é controlado por permissões específicas, como "Ver armamento da OPM", "Ver armamento do CPR" ou "Ver armamento todos".
- **create(Request $request):** Exibe o formulário para criação de um novo armamento, disponível apenas para usuários com a permissão de cadastrar armamentos.
- **store(Request $request):** Cria um novo armamento no banco de dados e armazena informações sobre o tipo, modelo, fabricante e condição do armamento, além de salvar imagens associadas.
- **show(Request $request, $id):** Exibe os detalhes de um armamento específico.
- **image($filename):** Retorna a imagem associada ao armamento para download.
- **edit(Request $request, $id):** Exibe o formulário de edição para um armamento existente, permitindo a atualização dos dados e das imagens associadas.
- **update(Request $request, $id):** Atualiza os dados de um armamento existente e suas imagens associadas, removendo as imagens antigas, se necessário.
- **destroy(Request $request, $id):** Exclui um armamento e suas imagens associadas do banco de dados.

#### Dependências

- **ResourceWar:** Modelo que representa os armamentos registrados no sistema, incluindo informações como tipo, modelo, fabricante e condição.
- **ResourceWarKind:** Modelo que representa os tipos de armamentos.
- **ResourceWarCondition:** Modelo que representa as condições dos armamentos.
- **FirearmManufacturer:** Modelo que representa os fabricantes de armas.
- **FirearmType:** Modelo que representa os tipos de armas.
- **FirearmCaliber:** Modelo que representa os calibres das armas.
- **ResourceWarImage:** Modelo que gerencia as imagens associadas aos armamentos.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### SearchController

Gerencia as operações de busca e consulta de dados no sistema, incluindo a pesquisa de policiais, veículos, pessoas e informações relacionadas às OPMs, além de permitir o filtro por diversos critérios.

#### Métodos Principais

- **staff_local(Request $request):** Realiza a busca de policiais da OPM local, filtrando por nome ou matrícula, e retornando os resultados formatados.
- **staff_com_reserva(Request $request):** Realiza a busca de policiais da OPM, considerando também os policiais com reserva.
- **staff_info(Request $request):** Exibe informações detalhadas de um funcionário específico, incluindo dados como matrícula, nome, CPF, e outros dados pessoais.
- **staff_geral(Request $request):** Realiza a busca de policiais de forma geral, com filtros por nome e matrícula, retornando os resultados de acordo com as permissões do usuário.
- **findcity(Request $request):** Realiza a busca de cidades com base no nome, retornando resultados formatados.
- **findopm(Request $request):** Realiza a busca de OPMs (Unidades da Polícia Militar) com base no nome, retornando resultados filtrados por tipo de OPM e permissões de acesso.
- **findopmsamecpr(Request $request):** Realiza a busca de OPMs dentro do mesmo CPR, com base no nome.
- **findopmstructure(Request $request):** Realiza a busca de estruturas de OPMs, com base no ID da OPM.
- **findstructurereceiveronlycomandoesub(Request $request):** Busca por estruturas de OPMs que sejam comandos ou subcomandos, de acordo com os critérios definidos.
- **findstructurereceiveronlyagencias(Request $request):** Busca por estruturas de OPMs que sejam agências ou subcomandos, de acordo com os critérios definidos.
- **findstructurereceiver(Request $request):** Realiza a busca por estruturas de OPMs, com base no nome e filtros adicionais.
- **findstructurelocalreceiver(Request $request):** Busca por estruturas locais de OPMs, com base nas permissões do usuário.
- **findagencias(Request $request):** Realiza a busca de agências, com base no nome.
- **finduseracl(Request $request):** Realiza a busca de usuários com permissões específicas de acordo com os critérios definidos.
- **findopmacl(Request $request):** Realiza a busca de OPMs com base em permissões específicas do usuário.
- **finduser(Request $request):** Realiza a busca de usuários, com base no nome ou matrícula.
- **findusersinsamestructure(Request $request):** Busca por usuários que estão na mesma estrutura de OPM que o usuário atual, filtrando por nome, matrícula e estrutura.
- **findvehicle(Request $request):** Realiza a busca de veículos, com base no modelo e outros critérios definidos.
- **findPeople(Request $request):** Realiza a busca de pessoas, com base no nome ou CPF.

#### Dependências

- **Staff:** Modelo que representa os policiais registrados, incluindo informações como nome, matrícula e OPM.
- **City:** Modelo que representa as cidades, permitindo a busca e a filtragem por nome.
- **EntityPeople:** Modelo que representa as pessoas registradas no sistema.
- **VehicleModel:** Modelo que representa os modelos de veículos.
- **Opm:** Modelo que representa as Unidades da Polícia Militar (OPMs).
- **OpmStructure:** Modelo que gerencia as estruturas dentro de cada OPM.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### SignatureController

Gerencia as operações relacionadas à assinatura de documentos, incluindo a visualização de documentos pendentes, assinaturas de documentos, e a movimentação de processos entre as agências.

#### Métodos Principais

- **assinadas(Request $request):** Exibe os documentos que já foram assinados, filtrados pela estrutura da OPM do usuário.
- **pendentes(Request $request):** Exibe os documentos pendentes de assinatura, permitindo a visualização e a assinatura por usuários autorizados.
- **cointassina(Request $request):** Permite que um usuário com a permissão "Assinar" assine um documento e registre a assinatura no sistema, além de realizar outras ações relacionadas ao processo de credenciamento de agentes.
- **cprassina(Request $request):** Permite que o comandante de CPR assine um documento, registrando a assinatura e movendo o processo conforme necessário.
- **visualiza(Request $request):** Exibe o documento para visualização antes da assinatura, de acordo com o tipo de documento (FIS, CPR, COINT).
- **devolvefisssocoint(Request $request):** Permite que o comandante devolva um documento para alteração antes de assinar.
- **devolvefiscordoint(Request $request):** Permite que o comandante devolva um documento para alteração no processo de assinatura.
- **assina(Request $request):** Permite que o comandante de uma OPM assine o FIS da agência, registrando a assinatura e enviando notificações via Sinmail.

#### Dependências

- **Signature:** Modelo que representa os documentos de assinatura, incluindo o status e o tipo de documento.
- **AgentFis:** Modelo que gerencia as informações de agentes e suas assinaturas no sistema.
- **Sinmail:** Modelo utilizado para enviar e-mails relacionados aos processos de assinatura.
- **SinmailProceeding:** Modelo que gerencia o acompanhamento dos e-mails enviados para os processos de assinatura.
- **TaskOrganization:** Modelo que representa as organizações de tarefas no sistema.
- **Decision:** Modelo que registra decisões tomadas sobre os documentos.
- **Staff:** Modelo que representa os funcionários envolvidos nos processos de assinatura.
- **OpmStructure:** Modelo que representa as estruturas das OPMs e agências.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### StaffController

Gerencia as operações relacionadas aos policiais, incluindo a visualização, edição e atualização das informações, como a unidade a que pertencem, o cargo, e outras informações adicionais.

#### Métodos Principais

- **index(Request $request):** Exibe a lista de policiais, permitindo a visualização das informações gerais. O acesso é restrito a usuários com a permissão "Ajustar pecúlio" ou pertencentes à "Segurança Orgânica".
- **update(Request $request, $id):** Atualiza as informações de um funcionário, incluindo a alteração de sua unidade de operação (OPM) e cargo. Se houver alteração de unidade, o status do agente é atualizado.
- **edit(Request $request, $id):** Exibe o formulário de edição para um funcionário específico, permitindo alterar dados como unidade, cargo e outras informações relevantes.

#### Dependências

- **Staff:** Modelo que representa os policiais, incluindo informações como nome, matrícula, cargo e unidade de operação.
- **Rank:** Modelo que representa os cargos dos policiais, com base no nível hierárquico.
- **OpmStructure:** Modelo que representa as estruturas de cada OPM, incluindo informações sobre o local de trabalho e unidades associadas.
- **AgentStatusLog:** Modelo que registra mudanças no status dos agentes, incluindo alterações de unidade ou credenciamento.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### StatisticController

Gerencia as operações relacionadas às estatísticas do sistema, incluindo a contagem de ocorrências por OPM e a visualização dessas informações de forma agregada.

#### Métodos Principais

- **countoccurrences(Request $request):** Exibe as ocorrências agrupadas por OPM, contando o número de ocorrências em cada uma delas e ordenando os resultados de forma decrescente. O acesso é restrito a usuários com a permissão "Menu Estatísticas".

#### Dependências

- **Occurrence:** Modelo que representa as ocorrências registradas no sistema, incluindo informações como OPM associada e detalhes sobre a ocorrência.
- **Opm:** Modelo que representa as Unidades da Polícia Militar (OPMs).

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### SupportTicketController

Gerencia as operações relacionadas ao suporte técnico, incluindo a criação, visualização, atualização e listagem de tickets de suporte, bem como a gestão das soluções fornecidas para os problemas relatados.

#### Métodos Principais

- **index(Request $request):** Exibe a lista de tickets de suporte criados pelo usuário autenticado, com base no tipo de ticket. Exibe também os tipos de tickets disponíveis para o usuário.
- **storeTicket(Request $request):** Cria um novo ticket de suporte, com base nas informações fornecidas no formulário, como tipo de ticket e descrição.
- **ticketList(Request $request):** Exibe a lista de tickets de suporte para os usuários com permissão da estrutura "CIADE", mostrando todos os tickets de forma ordenada.
- **show(Request $request, $id):** Exibe os detalhes de um ticket de suporte específico, marcando o ticket como lido quando o usuário acessa.
- **update(Request $request, $id):** Atualiza a solução de um ticket de suporte, registrando o usuário que resolveu o problema e a data da solução. O acesso é restrito aos usuários da estrutura "CIADE".

#### Dependências

- **TicketKind:** Modelo que representa os tipos de tickets de suporte, como "Problema técnico", "Erro de sistema", etc.
- **SupportTicket:** Modelo que representa os tickets de suporte, com informações como descrição, status e data de criação.
- **SupportTicketRead:** Modelo que registra quando um usuário visualiza um ticket de suporte.
- **User:** Modelo que representa o usuário autenticado no sistema.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### TaskOrganizationController

Gerencia as operações relacionadas às organizações de tarefas, incluindo a visualização, listagem e atualização do status de missões e documentos associados às tarefas.

#### Métodos Principais

- **pendentes(Request $request):** Exibe a lista de missões pendentes associadas à OPM do usuário, com base nas permissões de "Ver missões". O usuário deve ter a permissão adequada para acessar esta funcionalidade.
- **concluidas(Request $request):** Exibe a lista de missões concluídas, filtradas por OPM e status, acessível apenas a usuários com a permissão de "Ver missões".
- **visualiza(Request $request):** Exibe os detalhes de uma missão específica, com base no tipo de documento associado. Pode redirecionar para uma página de visualização de FIS, ou encaminhar para um link de e-mail (Sinmail) dependendo do tipo de documento.

#### Dependências

- **TaskOrganization:** Modelo que representa as organizações de tarefas, incluindo informações como status da missão, tipo de documento e referências associadas.
- **Staff:** Modelo que representa os funcionários, incluindo dados sobre a unidade à qual pertencem.
- **AgentFis:** Modelo que gerencia os agentes associados às missões, especialmente relacionado às missões de FIS.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### TermsAndConditionsController

Gerencia as operações relacionadas aos termos e condições de uso do sistema, incluindo a visualização, aceitação, criação e atualização dos termos, bem como a autenticação de usuários através de OTP (One Time Password).

#### Métodos Principais

- **termovigente():** Exibe os termos e condições vigentes, trazendo o último termo registrado no sistema.
- **last():** Exibe os termos e condições mais recentes, com base no registro mais recente.
- **aceite(Request $request):** Registra a aceitação dos termos e condições pelo usuário, salvando a data de aceitação no sistema.
- **create():** Exibe o formulário para criar novos termos e condições de uso, disponível apenas para usuários com a permissão "Gerenciar termos de uso".
- **store(Request $request):** Armazena os novos termos e condições de uso no sistema e registra a aceitação do usuário.
- **conteudo(Request $request, $id):** Exibe o conteúdo dos termos e condições de um ID específico, com informações sobre o responsável pela criação.
- **authenticate(Request $request):** Realiza a autenticação do usuário utilizando o Google2FA, verificando o OTP gerado.
- **otpGenerate(Request $request):** Gera uma nova chave OTP para o usuário, enviando-a por e-mail.
- **otpReset(Request $request, $id):** Restaura a chave OTP para o usuário especificado, gerando uma nova chave e enviando-a por e-mail.

#### Dependências

- **TermsAndConditions:** Modelo que representa os termos e condições de uso registrados no sistema, incluindo o conteúdo e a data de criação.
- **TermUser:** Modelo que registra a aceitação dos termos e condições por parte dos usuários.
- **User:** Modelo que representa os usuários do sistema, incluindo a autenticação via OTP.
- **Google2FA:** Serviço para autenticação de dois fatores utilizando o Google Authenticator.

> **Padrão de Design Utilizado:** MVC, com o controller responsável pela lógica de negócios e acesso a dados.

---

### Controllers não implementados

- ConditionController
- CprController
- IntelligenceController
- OpmGoverningController
- OpmStructureController
- PriorityTargetController
- SettingsController

## Models

### 1. Agent Model

Representa agentes no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `agents`

| Column     | Type    | Description              |
| ---------- | ------- | ------------------------ |
| `id`       | integer | Primary Key              |
| `staff_id` | integer | Foreign Key para `staff` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `staff()`: Relacionamento **belongsTo** com `App\Staff` (um agente pertence a um membro do staff).

---

### 2. AgentFis Model

Representa os FIS com auditoria de alterações e múltiplos relacionamentos com Staff, Rank e estruturas OPM.

#### Table: `agent_fis`

| Column                         | Type    | Description                           |
| ------------------------------ | ------- | ------------------------------------- |
| `id`                           | integer | Primary Key                           |
| `staff_id_candidato`           | integer | FK para `staff` (candidato)           |
| `staff_id_agente`              | integer | FK para `staff` (agente)              |
| `staff_id_chefe_agencia`       | integer | FK para `staff` (chefe de agência)    |
| `rank_id_candidato`            | integer | FK para `rank` (candidato)            |
| `rank_id_agente`               | integer | FK para `rank` (agente)               |
| `rank_id_chefe_agencia`        | integer | FK para `rank` (chefe de agência)     |
| `opm_structure_id_solicitante` | integer | FK para `opm_structure` (solicitante) |
| `opm_id_candidato`             | integer | FK para `opm` (candidato)             |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `staff_candidato()`: **belongsTo** `App\Staff` via `staff_id_candidato`
- `staff_agente()`: **belongsTo** `App\Staff` via `staff_id_agente`
- `staff_chefe_agencia()`: **belongsTo** `App\Staff` via `staff_id_chefe_agencia`
- `rank_candidato()`: **belongsTo** `App\Rank` via `rank_id_candidato`
- `rank_agente()`: **belongsTo** `App\Rank` via `rank_id_agente`
- `rank_chefe_agencia()`: **belongsTo** `App\Rank` via `rank_id_chefe_agencia`
- `opm_structure_solicitante()`: **belongsTo** `App\OpmStructure` via `opm_structure_id_solicitante`
- `opm_candidato()`: **belongsTo** `App\Opm` via `opm_id_candidato`

---

### 3. AgentPesquisaSocial Model

Gerencia dados de pesquisa social com auditoria.

#### Table: `agent_pesquisa_social`

| Column                   | Type    | Description                        |
| ------------------------ | ------- | ---------------------------------- |
| `id`                     | integer | Primary Key                        |
| `staff_id_agente`        | integer | FK para `staff` (agente)           |
| `staff_id_chefe_agencia` | integer | FK para `staff` (chefe de agência) |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `staff_agente()`: **belongsTo** `App\Staff` via `staff_id_agente`
- `staff_chefe_agencia()`: **belongsTo** `App\Staff` via `staff_id_chefe_agencia`

---

### 4. AgentRequestForInclusion Model

Controla solicitações de inclusão de agentes com múltiplas assinaturas e relacionamentos.

#### Table: `agent_request_for_inclusions`

| Column                        | Type    | Description                                |
| ----------------------------- | ------- | ------------------------------------------ |
| `id`                          | integer | Primary Key                                |
| `staff_id`                    | integer | FK para `staff`                            |
| `rank_id`                     | integer | FK para `rank`                             |
| `opm_id`                      | integer | FK para `opm`                              |
| `difusao_ps_opm_structure_id` | integer | FK para `opm_structure`                    |
| `cordoint_signed_by_staff_id` | integer | FK para `staff` (assinatura Cordoint)      |
| `sapc_signed_staff_id`        | integer | FK para `staff` (assinatura SAPC)          |
| `sai_signed_staff_id`         | integer | FK para `staff` (assinatura SAI)           |
| `cci_signed_staff_id`         | integer | FK para `staff` (assinatura CCI)           |
| `sso_signed_by_staff_id`      | integer | FK para `staff` (assinatura SSO)           |
| `indeferido_por_staff_id`     | integer | FK para `staff` (indeferido por)           |
| `desc_solic_staff_id`         | integer | FK para `staff` (solicitação de descrição) |
| `desc_solic_rank_id`          | integer | FK para `rank` (solicitação de descrição)  |
| `city_id`                     | integer | FK para `city`                             |

#### Relationships

- `staff()`: **belongsTo** `App\Staff`
- `rank()`: **belongsTo** `App\Rank`
- `opm()`: **belongsTo** `App\Opm`
- `difusao_ps_opm_structure()`: **belongsTo** `App\OpmStructure`
- `pesquisa_social()`: **hasOne** `App\AgentPesquisaSocial`
- `cordoint_signed_by_staff()`: **belongsTo** `App\Staff` via `cordoint_signed_by_staff_id`
- `sapc_signed_staff()`: **belongsTo** `App\Staff` via `sapc_signed_staff_id`
- `sai_signed_staff()`: **belongsTo** `App\Staff` via `sai_signed_staff_id`
- `cci_signed_staff()`: **belongsTo** `App\Staff` via `cci_signed_staff_id`
- `sso_signed_staff()`: **belongsTo** `App\Staff` via `sso_signed_staff_id`
- `indeferido_por_staff()`: **belongsTo** `App\Staff` via `indeferido_por_staff_id`
- `desc_solic_staff()`: **belongsTo** `App\Staff` via `desc_solic_staff_id`
- `desc_solic_rank()`: **belongsTo** `App\Staff` via `desc_solic_rank_id`
- `city()`: **belongsTo** `App\City`

---

### 5. AgentStatusLog Model

Registra alterações de status de agentes com auditoria.

#### Table: `agent_status_logs`

| Column               | Type    | Description                     |
| -------------------- | ------- | ------------------------------- |
| `id`                 | integer | Primary Key                     |
| `opm_id`             | integer | FK para `opm`                   |
| `staff_id`           | integer | FK para `staff`                 |
| `rank_id`            | integer | FK para `rank`                  |
| `feito_por_staff_id` | integer | FK para `staff` (executado por) |
| `feito_por_rank_id`  | integer | FK para `rank` (executado por)  |

#### Relationships

- `opm()`: **belongsTo** `App\Opm`
- `staff()`: **belongsTo** `App\Staff`
- `rank()`: **belongsTo** `App\Rank`
- `feito_por_staff()`: **belongsTo** `App\Staff` via `feito_por_staff_id`
- `feito_por_rank()`: **belongsTo** `App\Rank` via `feito_por_rank_id`

---

### 6. Attachment Model

Armazena anexos genéricos no sistema.

#### Table: `attachments`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 7. City Model

Representa cidades no sistema.

#### Table: `cities`

| Column     | Type    | Description      |
| ---------- | ------- | ---------------- |
| `id`       | integer | Primary Key      |
| `state_id` | integer | FK para `states` |

#### Relationships

- `state()`: **belongsTo** `App\State`

---

### 8. CivilState Model

Gerencia estados civis (casado, solteiro, etc.).

#### Table: `civil_states`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

---

### 9. CodeVerification Model

Armazena códigos de verificação/validação.

#### Table: `code_verifications`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 10. CrimeCommunicationKind Model

Define tipos de comunicação de crime.

#### Table: `crime_communication_kinds`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

---

### 11. CrimeConnotation Model

Gerencia conotações/classificações criminais.

#### Table: `crime_connotations`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

---

### 12. CrimeInformationSource Model

Define fontes de informação de crime.

#### Table: `crime_information_sources`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

---

### 13. Decision Model

Gerencia decisões com auditoria e assinaturas de staff/rank.

#### Table: `decisions`

| Column              | Type    | Description                         |
| ------------------- | ------- | ----------------------------------- |
| `id`                | integer | Primary Key                         |
| `assinado_por`      | integer | FK para `staff` (assinatura)        |
| `assinado_por_rank` | integer | FK para `rank` (rank da assinatura) |

#### Relationships

- `assinado()`: **belongsTo** `App\Staff` via `assinado_por`
- `assinado_rank()`: **belongsTo** `App\Rank` via `assinado_por_rank`

---

### 14. Document Model

Gerencia documentos com controle de acesso, auditoria e múltiplos relacionamentos.

#### Table: `documents`

| Column                  | Type     | Description                                   |
| ----------------------- | -------- | --------------------------------------------- |
| `id`                    | integer  | Primary Key                                   |
| `staff_id`              | integer  | FK para `staff` (autor)                       |
| `rank_id`               | integer  | FK para `rank` (autor)                        |
| `reference_document_id` | integer  | FK para `documents` (documento de referência) |
| `reply_document_id`     | integer  | FK para `documents` (resposta)                |
| `bloqueio_sap`          | datetime | Data de bloqueio (se aplicável)               |
| `opm_structure_id`      | integer  | FK para `opm_structure`                       |
| `document_kind_id`      | integer  | FK para `document_kind`                       |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `readers()`: **belongsToMany** `App\User` (usuários que leram o documento)
- `status()`: **hasOne** `App\DocumentHasDifusao`
- `planop()`: **hasOne** `App\DocumentPlanoDeOperacoes`
- `opm_structure()`: **belongsTo** `App\OpmStructure`
- `staff()`: **belongsTo** `App\Staff`
- `referencia()`: **belongsTo** `App\Document` (auto-relacionamento)
- ... (demais relações como `entity_people_involvement`, `attachment`, etc.)

#### Scopes

- Escopo global `bloqueio_sap`: Filtra documentos não bloqueados, exceto para usuários com estrutura OPM 636.

---

### 15. DocumentControl Model

Controla fluxo de encaminhamento e gestão de documentos.

#### Table: `document_controls`

| Column                          | Type    | Description                                       |
| ------------------------------- | ------- | ------------------------------------------------- |
| `id`                            | integer | Primary Key                                       |
| `criado_por_staff_id`           | integer | FK para `staff` (criador)                         |
| `destinatario_opm_structure_id` | integer | FK para `opm_structure` (destinatário)            |
| `encaminhado_por_staff_id`      | integer | FK para `staff` (responsável pelo encaminhamento) |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `document()`: **belongsTo** `App\Document`
- `criado_por_staff()`: **belongsTo** `App\Staff` via `criado_por_staff_id`
- `destinatario_staff()`: **belongsTo** `App\Staff` via `destinatario_staff_id`
- ... (demais relações seguem padrão similar para `rank` e `opm_structure`)

---

### 16. DocumentHasDifusaoAnterior Model

Registra histórico de difusões anteriores de documentos.

#### Table: `document_has_difusao_anterior`

| Column             | Type    | Description             |
| ------------------ | ------- | ----------------------- |
| `id`               | integer | Primary Key             |
| `opm_structure_id` | integer | FK para `opm_structure` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `opm_structure()`: **belongsTo** `App\OpmStructure`

---

### 17. DocumentImage Model

Armazena imagens associadas a documentos.

#### Table: `document_images`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 18. DocumentKind Model

Define tipos/categorias de documentos.

#### Table: `document_kinds`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

---

### 19. DocumentPlanoDeOperacoes Model

Gerencia planos de operações vinculados a documentos.

#### Table: `document_plano_de_operacoes`

| Column        | Type    | Description         |
| ------------- | ------- | ------------------- |
| `id`          | integer | Primary Key         |
| `document_id` | integer | FK para `documents` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `document()`: **belongsTo** `App\Document`

---

### 20. EntityFirearm Model

Gerencia armas de fogo envolvidas em entidades, com auditoria.

#### Table: `entity_firearms`

| Column                            | Type    | Description                            |
| --------------------------------- | ------- | -------------------------------------- |
| `id`                              | integer | Primary Key                            |
| `firearm_type_id`                 | integer | FK para `firearm_types`                |
| `firearm_manufacturer_id`         | integer | FK para `firearm_manufacturers`        |
| `firearm_caliber_id`              | integer | FK para `firearm_calibers`             |
| `firearm_owner_id`                | integer | FK para `firearm_owners`               |
| `firearm_serial_number_status_id` | integer | FK para `firearm_serial_number_status` |

#### Relationships

- `firearm_type()`: **belongsTo** `App\FirearmType`
- `firearm_manufacturer()`: **belongsTo** `App\FirearmManufacturer`
- `firearm_caliber()`: **belongsTo** `App\FirearmCaliber`
- `firearm_owner()`: **belongsTo** `App\FirearmOwner`
- `firearm_serial_number_status()`: **belongsTo** `App\FirearmSerialNumberStatus`

---

### 21. EntityFirearmInvolvement Model

Registra o envolvimento de armas de fogo com ocorrências e documentos.

#### Table: `entity_firearm_involvements`

| Column              | Type    | Description               |
| ------------------- | ------- | ------------------------- |
| `id`                | integer | Primary Key               |
| `entity_firearm_id` | integer | FK para `entity_firearms` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `entity_firearm()`: **belongsTo** `App\EntityFirearm`

---

### 22. EntityPeople Model

Gerencia entidades de pessoas com auditoria, múltiplos relacionamentos e atributos.

#### Table: `entity_peoples`

| Column                             | Type    | Description                           |
| ---------------------------------- | ------- | ------------------------------------- |
| `id`                               | integer | Primary Key                           |
| `entity_people_involved_status_id` | integer | FK para status de envolvimento        |
| `entity_people_color_id`           | integer | FK para cores associadas              |
| `staff_id`                         | integer | FK para `staff` (relacionamento base) |
| `created_by_staff_id`              | integer | FK para `staff` (criador)             |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `entity_people_involved_status()`: **belongsTo** `App\EntityPeopleInvolvedStatus`
- `staff()`: **belongsTo** `App\Staff`
- `endereco()`: **hasMany** `App\EntityPeopleAddress`
- `involved_firearms()`: **belongsToMany** `App\EntityFirearm`
- `created_by()`: **belongsTo** `App\Staff` via `created_by_staff_id`
- ... (12+ relações com modelos de apelidos, imagens, mandados, etc.)

#### Attributes

- `status_atual`: Retorna último status de envolvimento
- `entity_editor`: Verifica permissões de edição (baseado no usuário logado)

---

### 23. EntityPeopleAddress Model

Armazena endereços de entidades de pessoas com auditoria.

#### Table: `entity_people_addresses`

| Column    | Type    | Description      |
| --------- | ------- | ---------------- |
| `id`      | integer | Primary Key      |
| `city_id` | integer | FK para `cities` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `city()`: **belongsTo** `App\City`

---

### 24. EntityPeopleApelido Model

Gerencia apelidos/nicknames de entidades de pessoas.

#### Table: `entity_people_apelidos`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 25. EntityPeopleArrestWarrant Model

Controla mandados de prisão associados a entidades de pessoas.

#### Table: `entity_people_arrest_warrants`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 26. EntityPeopleColor Model

Define cores associadas a entidades de pessoas.

#### Table: `entity_people_colors`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `cor` deve ser definido na migração.

---

### 27. EntityPeopleCrime Model

Vincula entidades de pessoas a crimes e facções, com auditoria.

#### Table: `entity_people_crimes`

| Column                        | Type    | Description                        |
| ----------------------------- | ------- | ---------------------------------- |
| `id`                          | integer | Primary Key                        |
| `faccao_id`                   | integer | FK para `faccoes`                  |
| `entity_people_crime_role_id` | integer | FK para `entity_people_crime_role` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `faccao()`: **belongsTo** `App\Faccao`
- `entity_people_crime_role()`: **belongsTo** `App\EntityPeopleCrimeRole`

---

### 28. EntityPeopleCrimeCommitted Model

Registra crimes cometidos por entidades de pessoas.

#### Table: `entity_people_crime_committed`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Os campos `entity_people_id` e `occurrence_kind_id` dependem da migração.

---

### 29. EntityPeopleCrimeRole Model

Define cargos criminais das entidades pessoas.

#### Table: `entity_people_crime_role`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `funcao` depende da criação na migração.

---

### 30. EntityPeopleEstado Model

Gerencia estados de envolvimento de entidades em ocorrências.

#### Table: `entity_people_involved_statuses`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `status` depende da migração.

---

### 31. EntityPeopleGeolocation Model

Armazena geolocalizações associadas a entidades de pessoas.

#### Table: `entity_people_geolocations`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

Os campos `entity_people_id` e `geometry` devem ser definidos na migração.

---

### 32. EntityPeopleHasEntityFirearm Model

Tabela pivô para relacionar entidades de pessoas com armas de fogo.

#### Table: `entity_people_has_entity_firearms`

| Column              | Type    | Description               |
| ------------------- | ------- | ------------------------- |
| `id`                | integer | Primary Key               |
| `entity_people_id`  | integer | FK para `entity_peoples`  |
| `entity_firearm_id` | integer | FK para `entity_firearms` |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `entity_people()`: **belongsTo** `App\EntityPeople`

---

### 33. EntityPeopleHasEntityVehicle Model

Tabela pivô para relacionar entidades de pessoas com veículos.

#### Table: `entity_people_has_entity_vehicles`

| Column             | Type    | Description              |
| ------------------ | ------- | ------------------------ |
| `id`               | integer | Primary Key              |
| `entity_people_id` | integer | FK para `entity_peoples` |

Campos protegidos por `$guarded = ['id']`

Os campos `entity_vehicle_id`, `occurrence_id` e `document_id` dependem da migração.

#### Relationships

- `entity_people()`: **belongsTo** `App\EntityPeople`

---

### 34. EntityPeopleImage Model

Gerencia imagens associadas a entidades de pessoas.

#### Table: `entity_people_images`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

Os campos `image_path` e `entity_people_id` dependem da migração.

---

### 35. EntityPeopleInvolvedStatus Model

Define status da entidade pessoa.

#### Table: `entity_people_involved_statuses`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `status` ou `color` deve ser definido na migração.

---

### 36. EntityPeopleInvolvement Model

Registra o envolvimento de entidades em ocorrências, com tipos e status específicos e se PM a situação funcional.

#### Table: `entity_people_involvements`

| Column                                | Type    | Description                               |
| ------------------------------------- | ------- | ----------------------------------------- |
| `id`                                  | integer | Primary Key                               |
| `entity_people_involvement_kind_id`   | integer | FK para `entity_people_involvement_kinds` |
| `entity_people_id`                    | integer | FK para `entity_peoples`                  |
| `entity_people_involved_status_id`    | integer | FK para status de envolvimento            |
| `entity_people_situacao_funcional_id` | integer | FK para situação funcional                |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `entity_people_involvement_kind()`: **belongsTo** `App\EntityPeopleInvolvementKind`
- `entity_people()`: **belongsTo** `App\EntityPeople`
- `entity_people_involved_status()`: **belongsTo** `App\EntityPeopleInvolvedStatus`
- `entity_people_situacao_funcional()`: **belongsTo** `App\EntityPeopleSituacaoFuncional`

---

### 37. EntityPeopleInvolvementKind Model

Define tipos de envolvimento de entidades em ocorrências.

#### Table: `entity_people_involvement_kinds`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `tipo` deve ser definido na migração.

---

### 38. EntityPeopleMark Model

Gerencia marcas/tatuagens associadas a entidades de pessoas.

#### Table: `entity_people_marks`

| Column                           | Type    | Description                   |
| -------------------------------- | ------- | ----------------------------- |
| `id`                             | integer | Primary Key                   |
| `entity_people_mark_kind_id`     | integer | FK para tipos de marca        |
| `entity_people_mark_location_id` | integer | FK para localizações de marca |

Campos protegidos por `$guarded = ['id']`

Os campos `entity_people_id` e `descricao` devem ser definidos na migração.

#### Relationships

- `entity_people_mark_kind()`: **belongsTo** `App\EntityPeopleMarkKind`
- `entity_people_mark_location()`: **belongsTo** `App\EntityPeopleMarkLocation`

---

### 39. EntityPeopleMarkKind Model

Classifica tipos de marcas/tatuagens (ex: tribal, símbolo, texto).

#### Table: `entity_people_mark_kinds`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `tipo` deve ser definido na migração.

---

### 40. EntityPeopleMarkLocation Model

Define localizações corporais de marcas (ex: braço, costas, pescoço).

#### Table: `entity_people_mark_locations`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

O campo `local` deve ser definido na migração.

---

### 41. EntityPeoplePriorityLevel Model

Representa os níveis de prioridade das pessoas no sistema.

#### Table: `entity_people_priority_levels`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 42. EntityPeopleSituacaoFuncional Model

Representa a situação funcional das pessoas no sistema.

#### Table: `entity_people_situacao_funcional`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 43. Faccao Model

Representa facções no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `faccoes`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 44. InstituicoesFinanceiras Model

Representa instituições financeiras no sistema.

#### Table: `institucoes_financeiras`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

O campo `nome` depende da implementação da migration.

---

### 45. Locality Model

Representa localidades no sistema com suporte a coordenadas geográficas.

#### Table: `localities`

| Column        | Type      | Description             |
| ------------- | --------- | ----------------------- |
| `id`          | integer   | Primary Key             |
| `coordinates` | geometry  | Coordenadas geográficas |

Os campos `nome`, `endereco`, `bairro`, `city_id`, `historico`, `logo_crim_info_id`, `observacoes`, `opm_id` dependem da implementação da migration.

#### Relationships

- `city()`: Relacionamento **belongsTo** com `App\City` (localidade pertence a uma cidade)
- `opm()`: Relacionamento **belongsTo** com `App\Opm` (localidade pertence a uma OPM)
- `locality_criminal_info()`: Relacionamento **hasMany** com `App\LocalityCriminalInfo` (localidade tem várias informações criminais)
- `locality_map_layer()`: Relacionamento **hasMany** com `App\LocalityMapLayer` (localidade tem várias camadas de mapa)
- `logo_crim_info()`: Relacionamento **belongsTo** com `App\LogoCrimInfo` (localidade pertence a uma informação criminal)

---

### 46. LocalityCriminalInfo Model

Representa informações criminais associadas a localidades.

#### Table: `locality_criminal_infos`

| Column                | Type      | Description                       |
| --------------------- | --------- | --------------------------------- |
| `id`                  | integer   | Primary Key                       |
| `faccao_dominante_id` | integer   | Foreign Key para facção dominante |
| `faccao_rival_id`     | integer   | Foreign Key para facção rival     |
| `entity_people_id`    | integer   | Foreign Key para pessoas          |

#### Relationships

- `faccao_dominante()`: Relacionamento **belongsTo** com `App\Faccao` (info criminal tem uma facção dominante)
- `faccao_rival()`: Relacionamento **belongsTo** com `App\Faccao` (info criminal tem uma facção rival)
- `entity_people()`: Relacionamento **belongsTo** com `App\EntityPeople` (info criminal pertence a uma pessoa)

---

### 47. LocalityMapLayer Model

Representa camadas de mapa associadas a localidades.

#### Table: `locality_map_layers`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

O campo `file_path`depende da implementação da migration.

#### Relationships

Existe um relacionamento com localities, mas não definido no model.

---

### 48. LogoCrimInfo Model

Representa informações criminais com suporte a coordenadas geográficas.

#### Table: `logo_crim_infos`

| Column        | Type      | Description             |
| ------------- | --------- | ----------------------- |
| `id`          | integer   | Primary Key             |
| `coordinates` | geometry  | Coordenadas geográficas |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `faccao()`: Relacionamento **belongsTo** com `App\Faccao` (info criminal pertence a uma facção)
- `prison()`: Relacionamento **belongsTo** com `App\Prison` (info criminal relacionada a uma prisão)
- `crime_communication_kind()`: Relacionamento **belongsTo** com `App\CrimeCommunicationKind` (info criminal tem um tipo de comunicação)
- `crime_connotation()`: Relacionamento **belongsTo** com `App\CrimeConnotation` (info criminal tem uma conotação)
- `crime_information_source()`: Relacionamento **belongsTo** com `App\CrimeInformationSource` (info criminal tem uma fonte de informação)
- `entity_people()`: Relacionamento **belongsTo** com `App\EntityPeople` (info criminal pertence a uma pessoa)
- `city()`: Relacionamento **belongsTo** com `App\City` (info criminal pertence a uma cidade)
- `opm()`: Relacionamento **belongsTo** com `App\Opm` (info criminal pertence a uma OPM)

---

### 49. MeiosAmeaca Model

Representa os meios de ameaça no sistema.

#### Table: `meios_ameaca`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

O campo `meio` depende da implementação na migration.

---

### 50. MeiosCrimeInstituicoesFinanceiras Model

Representa os meios utilizados em crimes contra instituições financeiras.

#### Table: `meios_crime_instituicoes_financeiras`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

O campo `meio` depende da implementação da migration.

---

### 51. ModalidadesCrimesInstituicoesFinanceiras Model

Representa as modalidades de crimes contra instituições financeiras.

#### Table: `modalidades_crimes_instituicoes_financeiras`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

O campo `modalidade` depende da implementação da migration.

---

### 52. Motivacao Model

Representa as motivações de crimes no sistema.

#### Table: `motivacoes_crimes`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

O campo `motivo` depende da implementação da migration.

---

### 53. News Model

Representa notícias no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `news`

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| `id`         | integer   | Primary Key         |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `staff()`: Relacionamento **belongsTo** com `App\Staff` (notícia pertence a um membro do staff)
- `rank()`: Relacionamento **belongsTo** com `App\Rank` (notícia tem uma classificação/rank)

---

### 54. Occurrence Model  

Registra ocorrências criminais com auditoria e múltiplos relacionamentos.  

#### Table: `occurrences`

| Column                  | Type    | Description                              |  
| ----------------------- | ------- | ---------------------------------------- |  
| `id`                    | integer | Primary Key                              |  
| `opm_id`                | integer | FK para `opm` (unidade policial)         |  
| `city_id`               | integer | FK para `cities` (cidade da ocorrência)  |  
| `zona_id`               | integer | FK para `zonas` (zona geográfica)        |  
| `vehicle_kind_id`       | integer | FK para tipos de veículos                |  
| `opm_area`              | integer | FK para `opm` (área responsável)         |  
| `occurrence_id_motivadora` | integer | FK para `occurrence_kinds` (ocorrência motivadora) |  
| `faccao_id`             | integer | FK para `faccoes` (facção envolvida)     |  
| `motivacao_id`          | integer | FK para motivações                       |  
| `meios_ameaca_id`       | integer | FK para meios de ameaça                  |  

#### Relationships

- `occurrence_kind_involved()`: **hasMany** `App\OccurrenceKindInvolved`  
- `opm()`: **belongsTo** `App\Opm`  
- `city()`: **belongsTo** `App\City`  
- `zona()`: **belongsTo** `App\Zona`  
- `opm_resp()`: **belongsTo** `App\Opm` via `opm_area`  
- `faccao_area()`: **belongsTo** `App\Faccao`  
- `entity_people_involvement()`: **hasMany** `App\EntityPeopleInvolvement`  
- `occurrence_geolocation()`: **hasOne** `App\OccurrenceGeolocation`  
- ... (demais relações seguem padrão similar)  

---

### 55. OccurrenceFirearmInvolved Model

Registra armas de fogo envolvidas em ocorrências, com auditoria.  

#### Table: `occurrence_firearm_involved`

| Column                    | Type    | Description                     |  
| ------------------------- | ------- | ------------------------------- |  
| `id`                      | integer | Primary Key                     |  
| `firearm_type_id`         | integer | FK para `firearm_types`         |  
| `people_involved_id`      | integer | FK para `occurrence_people_involved` |  
| `firearm_manufacturer_id` | integer | FK para `firearm_manufacturers` |  
| `firearm_caliber_id`      | integer | FK para `firearm_calibers`      |  

Campos protegidos por `$guarded = ['id']`  

#### Relationships

- `firearm_type()`: **belongsTo** `App\FirearmType`  
- `people_involved()`: **belongsTo** `App\OccurrencePeopleInvolved`  
- `firearm_manufacturer()`: **belongsTo** `App\FirearmManufacturer`  
- `firearm_caliber()`: **belongsTo** `App\FirearmCaliber`  

---

### 56. OccurrenceGeolocation Model

Armazena geolocalizações vinculadas a ocorrências.  

#### Table: `occurrence_geolocations`

| Column            | Type    | Description                   |  
| ----------------- | ------- | ----------------------------- |  
| `id`              | integer | Primary Key                   |  
| `occurrence_id`   | integer | FK para `occurrences`         |  

Campos protegidos por `$guarded = ['id']`

O campo `coordinates` deve ser implementado na migration.

#### Relationships

- `occurrence()`: **belongsTo** `App\Occurrence`  

---

### 57. OccurrenceKindInvolved Model

Vincula tipos de ocorrências a casos específicos, com auditoria.  

#### Table: `occurrence_kind_involved`

| Column                 | Type    | Description                     |  
| ---------------------- | ------- | ------------------------------- |  
| `id`                   | integer | Primary Key                     |  
| `occurrence_id`        | integer | FK para `occurrences`           |  
| `occurrence_kind_id`   | integer | FK para `occurrence_kinds`      |  

Campos protegidos por `$guarded = ['id']`  

#### Relationships

- `occurrence()`: **belongsTo** `App\Occurrence`  
- `occurrence_kind()`: **belongsTo** `App\OccurrenceKind`  

---

### 58. OccurrencePeopleInvolved Model

Registra pessoas envolvidas em ocorrências com auditoria e múltiplos atributos.

#### Table: `occurrence_people_involved`  

| Column                              | Type    | Description                              |  
| ----------------------------------- | ------- | ---------------------------------------- |  
| `id`                                | integer | Primary Key                              |  
| `involvement_kind_id`               | integer | FK para tipos de envolvimento            |  
| `gender_id`                         | integer | FK para gêneros                          |  
| `faccao_id`                         | integer | FK para facções criminosas               |  
| `staff_id`                          | integer | FK para membros do staff                 |  
| `rank_id`                           | integer | FK para patentes                         |  
| `city_id`                           | integer | FK para cidades                          |  
| `people_color_id`                   | integer | FK para cores/etnias                     |  
| `occurrence_people_involved_status_id` | integer | FK para status de envolvimento        |  
| `occurrence_vehicle_involved_id`    | integer | FK para veículos envolvidos              |  
| `weapon_kind_id`                    | integer | FK para tipos de armas                   |  
| `civil_state_id`                    | integer | FK para estados civis                    |  

Campos protegidos por `$guarded = ['id']`  

#### Relationships

- `involvement_kind()`: **belongsTo** `App\InvolvementKind`  
- `gender()`: **belongsTo** `App\Gender`  
- `faccao()`: **belongsTo** `App\Faccao`  
- `staff()`: **belongsTo** `App\Staff`  
- `city()`: **belongsTo** `App\City`  
- `occurrence_firearm_involved()`: **hasOne** `App\OccurrenceFirearmInvolved`  
- ... (12+ relações com `Rank`, `PeopleColor`, `WeaponKind`, etc.)  

#### Observações

- Modelo auditável via `OwenIt/Auditing`.  
- Centraliza dados demográficos, criminais e operacionais de indivíduos vinculados a ocorrências.  
- Relacionamento 1:1 com armas de fogo específicas (`occurrence_firearm_involved`).

---

### 59. ResourceGadget Model

Gerencia recursos do tipo gadget (equipamentos) com relacionamentos para tipo, condição e imagens.  

#### Table: `resource_gadgets`

| Column                  | Type    | Description                     |  
| ----------------------- | ------- | ------------------------------- |  
| `id`                    | integer | Primary Key                     |  
| `gadget_kind_id`        | integer | FK para `gadget_kinds`          |  
| `gadget_condition_id`   | integer | FK para `gadget_conditions`     |  
| `opm_id`                | integer | FK para `opm` (unidade responsável) |  

#### Relationships

- `gadget_kind()`: **belongsTo** `App\GadgetKind`  
- `gadget_condition()`: **belongsTo** `App\GadgetCondition`  
- `resource_gadget_image()`: **hasMany** `App\ResourceGadgetImage`  
- `opm()`: **belongsTo** `App\Opm`  

---

### 60. ResourceGadgetImage Model

Armazena imagens associadas a gadgets.  

#### Table: `resource_gadget_images`

| Column               | Type    | Description                   |  
| -------------------- | ------- | ----------------------------- |  
| `id`                 | integer | Primary Key                   |  
| `resource_gadget_id` | integer | FK para `resource_gadgets`    |  

Campos protegidos por `$guarded = ['id']`  

O campo `image_path` deve ser definido na migração.

---

### 61. ResourceVehicle Model

Gerencia recursos do tipo veículo, incluindo modelo, condição e imagens.  

#### Table: `resource_vehicles`

| Column                  | Type    | Description                     |  
| ----------------------- | ------- | ------------------------------- |  
| `id`                    | integer | Primary Key                     |  
| `vehicle_condition_id`  | integer | FK para `vehicle_conditions`    |  
| `vehicle_model_id`      | integer | FK para `vehicle_models`        |  
| `vehicle_kind_id`       | integer | FK para `vehicle_kinds`         |  
| `vehicle_color_id`      | integer | FK para `vehicle_colors`        |  
| `opm_id`                | integer | FK para `opm` (unidade responsável) |  

Os campos `ano_fabricacao`, `placa`, `placa_sigilosa`, `data_validade_placa_sigilosa`, `observacoes`.

#### Relationships

- `vehicle_condition()`: **belongsTo** `App\VehicleCondition`  
- `vehicle_model()`: **belongsTo** `App\VehicleModel`  
- `vehicle_kind()`: **belongsTo** `App\VehicleKind`  
- `vehicle_color()`: **belongsTo** `App\VehicleColor`  
- `resource_vehicle_image()`: **hasMany** `App\ResourceVehicleImage`  
- `opm()`: **belongsTo** `App\Opm`  

---

### 62. ResourceGadget Model

Gerencia recursos do tipo gadget (equipamentos) com relacionamentos para tipo, condição e imagens.  

#### Table: `resource_gadgets`

| Column                  | Type    | Description                     |  
| ----------------------- | ------- | ------------------------------- |  
| `id`                    | integer | Primary Key                     |  
| `gadget_kind_id`        | integer | FK para `gadget_kinds`          |  
| `gadget_condition_id`   | integer | FK para `gadget_conditions`     |  
| `opm_id`                | integer | FK para `opm` (unidade responsável) |  

#### Relationships

- `gadget_kind()`: **belongsTo** `App\GadgetKind`  
- `gadget_condition()`: **belongsTo** `App\GadgetCondition`  
- `resource_gadget_image()`: **hasMany** `App\ResourceGadgetImage`  
- `opm()`: **belongsTo** `App\Opm`  

---

### 63. ResourceGadgetImage Model

Armazena imagens associadas a gadgets.  

#### Table: `resource_gadget_images`

| Column               | Type    | Description                   |  
| -------------------- | ------- | ----------------------------- |  
| `id`                 | integer | Primary Key                   |  
| `resource_gadget_id` | integer | FK para `resource_gadgets`    |  

Campos protegidos por `$guarded = ['id']`  

O campos `image_path` deve ser definido na migração.

---

### 64. ResourceVehicle Model  

Gerencia recursos do tipo veículo, incluindo modelo, condição e imagens.  

#### Table: `resource_vehicles`

| Column                  | Type    | Description                     |  
| ----------------------- | ------- | ------------------------------- |  
| `id`                    | integer | Primary Key                     |  
| `vehicle_condition_id`  | integer | FK para `vehicle_conditions`    |  
| `vehicle_model_id`      | integer | FK para `vehicle_models`        |  
| `vehicle_kind_id`       | integer | FK para `vehicle_kinds`         |  
| `vehicle_color_id`      | integer | FK para `vehicle_colors`        |  
| `opm_id`                | integer | FK para `opm` (unidade responsável) |  

#### Relationships

- `vehicle_condition()`: **belongsTo** `App\VehicleCondition`  
- `vehicle_model()`: **belongsTo** `App\VehicleModel`  
- `vehicle_kind()`: **belongsTo** `App\VehicleKind`  
- `vehicle_color()`: **belongsTo** `App\VehicleColor`  
- `resource_vehicle_image()`: **hasMany** `App\ResourceVehicleImage`  
- `opm()`: **belongsTo** `App\Opm`  

---

### 65. ResourceVehicleImage Model

Representa imagens de veículos no sistema.

#### Table: `resource_vehicle_images`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

O campo `image_path` deve ser implementado na migração.

#### Relationships

Existe um relacionamento `resource_vehicle_id` com `resource_vehicles`.

### 66. ResourceWar Model

Representa recursos bélicos no sistema.

#### Table: `resource_wars`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

Os campos `resource_war_kind_id`, `manufacturer_id`, `firearm_type_id`, `firearm_caliber_id`, `resource_colete_kind_id`, `resource_war_condition_id`, `validade_colete`, `carga_fixa_staff_id`, `modelo`, `numeracao`, `observacoes`, `opm_id` devem ser implementados na migração.

#### Relationships

- `resource_war_kind()`: Relacionamento **belongsTo** com `App\ResourceWarKind`.
- `manufacturer()`: Relacionamento **belongsTo** com `App\FirearmManufacturer`.
- `firearm_type()`: Relacionamento **belongsTo** com `App\FirearmType`.
- `firearm_caliber()`: Relacionamento **belongsTo** com `App\FirearmCaliber`.
- `resource_colete_kind()`: Relacionamento **belongsTo** com `App\ResourceColeteKind`.
- `resource_war_condition()`: Relacionamento **belongsTo** com `App\ResourceWarCondition`.
- `carga_fixa_staff()`: Relacionamento **belongsTo** com `App\Staff`.
- `opm()`: Relacionamento **belongsTo** com `App\Opm`.
- `resource_war_image()`: Relacionamento **hasMany** com `App\ResourceWarImage`.

#### Scopes

(Nenhum scope definido no código fornecido)

### 67. ResourceWarImage Model

Representa imagens de recursos bélicos no sistema.

#### Table: `resource_war_images`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

Os campos `resource_war_id` e `image_path` devem ser implementados na migração.

### 68. Settings Model

Representa configurações do sistema.

#### Table: `settings`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

Os campos `credenciamento_inicio` e `credenciamento_fim` devem ser implementados na migração.

### 69. Signature Model

Representa assinaturas no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `signatures`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 70. Staff Model

Representa membros do staff no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `staff`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

Os campos `nome`, `rank_id`, `opm_id`, `gender_id`, `leave_kind_id`, `cpf`, `data_de_nascimento`, `endereco`, `numero`, `bairro`, `complemento`, `cidade`, `uf`, `cep`, `rg`, `orgao_expedidor`, `data_de_admissao`, `mae`, `pai` devem ser implementados na migração.

#### Relationships

- `condition()`: Relacionamento **belongsTo** com `App\Condition`.
- `agent()`: Relacionamento **hasOne** com `App\Agent`.
- `staff_quest()`: Relacionamento **hasMany** com `App\StaffQuest`.
- `staff_additional_information()`: Relacionamento **hasOne** com `App\StaffAdditionalInformation`.
- `staff_accreditation()`: Relacionamento **hasMany** com `App\StaffAccreditation`.
- `gender()`: Relacionamento **belongsTo** com `App\Gender`.
- `opm()`: Relacionamento **belongsTo** com `App\Opm`.
- `rank()`: Relacionamento **belongsTo** com `App\Rank`.
- `user()`: Relacionamento **hasOne** com `App\User`.
- `naturalidade()`: Relacionamento **belongsTo** com `App\City`, chave estrangeira `naturalidade_city_id`.
- `agent_status_log()`: Relacionamento **hasOne** com `App\AgentStatusLog`, ordenado pelo mais recente.
- `historico_credenciamento()`: Relacionamento **hasMany** com `App\AgentStatusLog`, chave estrangeira `staff_id`.
- `improvement_course()`: Relacionamento **hasMany** com `App\StaffHasImprovementCourse`.
- `agent_request_for_inclusion()`: Relacionamento **hasMany** com `App\AgentRequestForInclusion`.

---

### 71. StaffAccreditation Model

Representa credenciamentos do staff no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `staff_accreditations`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Os campos `staff_id`, `decidido_por`, `apto_chefe_cordoint`, `apto_sso` devem ser implementados na migração.

#### Relationships

- `staff()`: Relacionamento **belongsTo** com `App\Staff`.
- `decisor()`: Relacionamento **belongsTo** com `App\Staff`, chave estrangeira `decidido_por`.

---

### 72. StaffAdditionalInformation Model

Representa informações adicionais sobre membros do staff no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `staff_additional_informations`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `endereco_city()`: Relacionamento **belongsTo** com `App\City`, chave estrangeira `endereco_city_id`.
- `staff()`: Relacionamento **belongsTo** com `App\Staff`.
- `opm_structure()`: Relacionamento **belongsTo** com `App\OpmStructure`.

---

### 73. StaffHasImprovementCourse Model

Representa a relação entre membros do staff e cursos de aperfeiçoamento no sistema.

#### Table: `staff_has_improvement_courses`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `improvement_course()`: Relacionamento **belongsTo** com `App\ImprovementCourse`.

### 74. StaffQuest Model

Representa questionamentos e consultas feitos por membros do staff no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `staff_quests`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

#### Relationships

- `staff()`: Relacionamento **belongsTo** com `App\Staff`.
- `quest_kind()`: Relacionamento **belongsTo** com `App\QuestKind`.
- `consultante()`: Relacionamento **belongsTo** com `App\Staff`, chave estrangeira `consulta_feita_por`.

---

### 75. SupportTicket Model

Representa tickets de suporte no sistema.

#### Table: `support_tickets`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

#### Relationships

- `ticket_kind()`: Relacionamento **belongsTo** com `App\TicketKind`.
- `user()`: Relacionamento **belongsTo** com `App\User`.
- `read()`: Relacionamento **belongsToMany** com `App\User` através da tabela `support_ticket_read_by_user`, incluindo o campo `created_at` no pivot.

---

### 76. SupportTicketRead Model

Representa os registros de leitura de tickets de suporte.

#### Table: `support_ticket_read_by_user`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 77. TaskOrganization Model

Representa a organização de tarefas no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `task_organizations`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 78. TermsAndConditions Model

Representa os termos e condições aceitos pelos usuários.

#### Table: `terms_and_conditions`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `staff()`: Relacionamento **belongsTo** com `App\Staff`, chave estrangeira `staff_id`.
- `rank()`: Relacionamento **belongsTo** com `App\Rank`, chave estrangeira `rank_id`.

---

### 79. TermUser Model

Representa os termos aceitos pelos usuários.

#### Table: `term_user`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 80. TiposEstabelecimentosComerciais Model

Representa os tipos de estabelecimentos comerciais no sistema.

#### Table: `tipos_estabelecimentos_comerciais`

Os campos `id` e `tipo` devem ser implementados na migração.

---

### 81. UserReadDoc Model

Representa a leitura de documentos pelos usuários no sistema.

#### Table: `user_read_docs`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `document()`: Relacionamento **belongsTo** com `App\Document`, chave estrangeira `document_id`.
- `user()`: Relacionamento **belongsTo** com `App\User`.

---

### 82. VehicleModel Model

Representa modelos de veículos no sistema.

#### Table: `vehicle_models`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

#### Relationships

- `vehicle_mark()`: Relacionamento **belongsTo** com `App\VehicleMark`.

---

### 83. WeaponKind Model

Representa os tipos de armas no sistema.

#### Table: `weapon_kinds`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

---

### 84. Zona Model

Representa as zonas no sistema.

#### Table: `zonas`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

---

### 85. OccurrenceVehicleInvolved Model

Representa os veículos envolvidos em ocorrências no sistema.

#### Table: `occurrence_vehicle_involveds`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 86. Opm Model

Representa as OPMs (Organizações Policiais Militares) no sistema.

#### Table: `opms`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 87. OpmGoverning Model

Representa as entidades governantes de OPMs no sistema.

#### Table: `opm_governings`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 88. OpmStructure Model

Representa a estrutura organizacional das OPMs no sistema.

#### Table: `opm_structures`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

---

### 89. User Model

Representa os usuários do sistema com funcionalidades de autenticação e auditoria (OwenIt/Auditing).

#### Table: `users`

| Column | Type | Description |
|--------|------|-------------|
| `id`   | integer | Primary Key |
| `name` | string | Nome do usuário |
| `staff_id` | integer | Foreign Key para `staff` |
| `email` | string | Endereço de e-mail |
| `password` | string | Senha criptografada |
| `google2fa_secret` | string | Chave 2FA (criptografada) |
| `email_verified_at` | datetime | Data de verificação do e-mail |

Campos protegidos por `$guarded = ['id']`

#### Relationships

- `staff()`: Relacionamento **belongsTo** com `App\Staff` (um usuário pertence a um membro do staff).
- `terms()`: Relacionamento **belongsToMany** com `App\TermsAndConditions` através da tabela `term_user`.

#### Scopes

- `podeAssinar()`: Verifica se o usuário tem permissão para assinar documentos baseado na estrutura da OPM.
- `arrayOpmStructure()`: Retorna um array com as estruturas da OPM do usuário.
- `arrayOpmStructureExceptCO()`: Retorna um array com as estruturas da OPM do usuário, exceto a de ID 642.
- `opmStructure()`: Retorna o ID da estrutura da OPM do usuário.
- `opmStructureAgencia()`: Retorna o ID da estrutura da OPM do tipo "Agência".

---

### Modelos sem implementação

- FirearmCaliber
- FirearmInvolved
- FirearmManufacturer
- FirearmOwner
- FirearmSerialNumberStatus
- FirearmType
- GadgetCondition
- GadgetKind
- Gender
- ImprovementCourse
- InvolvementKind
- OccurrenceKind
- OccurrencePeopleInvolvedStatus
- PeopleColor
- PeopleRelationship
- PeopleRelationshipKind
- QuestKind
- Rank
- ResourceColeteKind
- ResourceWarCondition
- ResourceWarKind
- State
- TicketKind
- VehicleColor
- VehicleCondition
- VehicleKind
- VehicleMark

## Views

```plaintext
📂 resources/views
├── 📂 acl/
│ ├── index.blade.php
│ ├── listaagentes.blade.php
│ ├── listaagentescursos.blade.php
│ ├── show.blade.php
│ ├── teste.blade.php
│ └── tokengenerate.blade.php
├── 📂 agent/
│ ├── aguarde.blade.php
│ ├── check_correg.blade.php
│ ├── credenciamento-cpr.blade.php
│ ├── credenciamento-pesquisa-social.blade.php
│ ├── credenciamento-show-pos-pesquisa.blade.php
│ ├── credenciamento-show.blade.php
│ ├── credenciamento.blade.php
│ ├── descredenciamento-show.blade.php
│ ├── edit.blade.php
│ ├── fis.blade.php
│ ├── fisingresso.blade.php
│ ├── formcredenciamento.blade.php
│ ├── index.blade.php
│ ├── janela_de_credenciamento.blade.php
│ ├── lista.blade.php
│ ├── modal-indeferir-credenciamento.blade.php
│ ├── modal-tramitar-credenciamento.blade.php
│ └── perfilagente.blade.php
├── 📂 auth/
│ ├── 📂 passwords/
│ │ ├── email.blade.php
│ │ └── reset.blade.php
│ ├── confirm.blade.php
│ ├── email.blade.php
│ ├── login.blade.php
│ ├── register.blade.php
│ ├── reset.blade.php
│ └── verify.blade.php
├── 📂 document/
│   ├── arquivo.blade.php
│   ├── arquivogeral.blade.php
│   ├── arquivosecao.blade.php
│   ├── caixadesaida.blade.php
│   ├── document_planop.blade.php
│   ├── documentedit.blade.php
│   ├── documento-lido-por.blade.php
│   ├── index.blade.php
│   ├── listadocumentos.blade.php
│   ├── menucontagemprazo.blade.php
│   ├── menudocumentos.blade.php
│   ├── modalencaminhar.blade.php
│   ├── modalplanop.blade.php
│   ├── prazos.blade.php
│   ├── rascunho.blade.php
│   ├── show-pdf.blade.php
│   ├── show-tramitacao-e-depachos-assinado.blade.php
│   ├── show-tramitacao-e-depachos.blade.php
│   ├── show.blade.php
│   └── teste.blade.php
├── 📂 documents/
│   └── search.blade.php
├── 📂 emails/
│   └── test-markdown.blade.php
├── 📂 entidades/
│   ├── entityfirearmedit.blade.php
│   ├── entitypeoplecreate.blade.php
│   ├── entitypeopleedit.blade.php
│   ├── entityvehicleedit.blade.php
│   ├── index.blade.php
│   ├── modalentidadearmacreate.blade.php
│   ├── modalentidadearmashow.blade.php
│   ├── modalentidadepessoacreate.blade.php
│   ├── modalentidadepessoashow.blade.php
│   ├── modalentidadeveiculocreate.blade.php
│   ├── modalentidadeveiculoshow.blade.php
│   ├── modalplayershow.blade.php
│   ├── priority_target.blade.php
│   └── querymodalentidadepessa.blade.php
├── 📂 faccao/
│   ├── create.blade.php
│   ├── edit.blade.php
│   ├── index.blade.php
│   ├── localidade_create.blade.php
│   ├── localidade_edit.blade.php
│   ├── localidade_form.blade.php
│   ├── localidade_index.blade.php
│   ├── localidade_show.blade.php
│   ├── logocrim_create.blade.php
│   ├── logocrim_edit.blade.php
│   ├── logocrim_form.blade.php
│   ├── logocrim_index.blade.php
│   └── logocrim_show.blade.php
├── 📂 google2fa/
│   ├── index.blade.php
│   └── new_otp.blade.php
├── 📂 improvementcourse/
│   ├── create.blade.php
│   ├── edit.blade.php
│   ├── index.blade.php
│   └── listar.blade.php
├── 📂 layouts/
│   ├── _notes
│   ├── aplicacao.blade.php
│   ├── autentica.blade.php
│   ├── emailAccessoLiberado.blade.php
│   ├── emailToken.blade.php
│   ├── menu.blade.php
│   ├── old-menu.blade.php
│   └── otp.blade.php
├── 📂 news/
│   ├── create_short_news.blade.php
│   ├── create.blade.php
│   ├── edit_short_news.blade.php
│   ├── form.blade.php
│   └── index.blade.php
├── 📂 occurrence/
│   ├── create.blade.php
│   ├── edit.blade.php
│   ├── listar.blade.php
│   ├── show.blade.php
│   ├── --createOld2.blade.php (deprecated)
│   ├── --editOld.blade.php (deprecated)
│   └── --oldcreate.blade.php (deprecated)
├── 📂 opm/
│   ├── edit.blade.php
│   ├── index.blade.php
├── 📂 opm_resources/
│   ├── create_gadget.blade.php
│   ├── create_vehicle.blade.php
│   ├── create_war.blade.php
│   ├── edit_gadget.blade.php
│   ├── edit_vehicle.blade.php
│   ├── edit_war.blade.php
│   ├── gadget_show.blade.php
│   ├── gadgets.blade.php
│   ├── vehicle_show.blade.php
│   ├── vehicles.blade.php
│   ├── war_show.blade.php
│   └── war.blade.php
├── 📂 painel/
│   ├── oldpainel.blade.php
│   ├── painel.blade.php
│   ├── painelnovo.blade.php
│   └── tutorial.blade.php
├── 📂 search/
│   └── index.blade.php
├── 📂 signature/
│   ├── assinadas.blade.php
│   ├── pendentes.blade.php
│   ├── visualzafis.blade.php
│   ├── visualzafiscoint.blade.php
│   └── visualzafiscpr.blade.php
├── 📂 sinmail/
│   ├── arquivo.blade.php
│   ├── entrada.blade.php
│   ├── novo.blade.php
│   ├── saida.blade.php
│   ├── show.blade.php
├── 📂 staff/
│   ├── edit.blade.php
│   └── index.blade.php
├── 📂 statistic/
│   └── countoccurrencebyopm.blade.php
├── 📂 support/
│   ├── index.blade.php
│   ├── show.blade.php
│   └── ticket-list.blade.php
├── 📂 taskorganization/
│   ├── concluidas.blade.php
│   ├── pendentes.blade.php
│   └── visualizafis.blade.php
├── 📂 termsandconditions/
│   ├── create.blade.php
│   ├── index.blade.php
│   └── last.blade.php
├── 📂 vendor/
└── mapa.blade.php
```

## Classes

### CustomRequestCaptcha Class

Classe de serviço para personalizar o método de requisição do reCAPTCHA.

**Observação:**

- Implementa `custom()` para retornar método POST personalizado.

---
