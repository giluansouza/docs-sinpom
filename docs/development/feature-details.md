---
sidebar_position: 3
---

# Funcionalidades do Sistema

Este relatório foi estruturado com base nas informações dos casos de uso, destacando as funcionalidades técnicas que suportam cada fluxo descrito. Ele oferece detalhes específicos de implementação, alinhando-se ao público-alvo técnico (desenvolvedores e testadores).

### Autenticação

#### Login no Sistema:

Permitir ao usuário autenticar-se no sistema via credenciais (e-mail e senha) e OTP.

Validar credenciais e OTP, redirecionando para a página inicial.

Alternativa: Acesso sem OTP, mantendo a segurança de credenciais.

### Gestão de Documentos

#### Criação de Documentos:

Disponibilizar menu "Novo documento" com opções de tipos predefinidos (ordem de busca, relatórios, etc.).

Validar permissões do usuário para criação.

Regras de negócio: Garantir que os campos obrigatórios sejam preenchidos.

#### Acompanhamento de Prazos:

Exibir prazos de documentos solicitados ou recebidos.

Destaque visual para documentos com prazo vencido.

### Consultas e Cadastros

#### Consulta de Pessoas:

Permitir busca por nome ou CPF.

Exibir resultados filtrados com dados relevantes em formato de lista.

#### Cadastro e Consulta de Logocrim:

Fornecer interface para cadastro com upload de imagens, seleção de grupo-crime e localização no mapa.

Permitir consulta detalhada, incluindo visualização de mapas interativos.

#### Cadastro e Consulta de Localidades:

Possibilitar cadastro de polígonos no mapa ou upload de arquivos KML.

Permitir consulta com detalhamento dos pontos cadastrados.

#### Gestão de Recursos (Veículos, Equipamentos, Material Bélico):

Visualização de recursos em formato de lista com opção de filtros.

Cadastro, edição e exclusão com validação de permissões.

### Ocorrências

#### Cadastro de Ocorrências:

Disponibilizar formulário dinâmico baseado no tipo de ocorrência selecionado.

Permitir inclusão de entidades (pessoas, veículos, armas) diretamente no cadastro.

### Listagem de Ocorrências:

Exibir ocorrências com opção de filtro.

Incluir visualização de mapas e detalhes de entidades associadas.

### Gestão de Credenciamento (PRA)

#### Solicitação de Credenciamento:

Formulário para preenchimento com campos obrigatórios e anexos em PDF.

Fluxos de revisão por comandante e CoordOInt.

#### Pesquisa Social:

Agentes realizam a pesquisa e preenchem formulário com resultados.

Chefe/Analista SOInt valida o processo e encaminha para despacho final.

#### Despacho Final:

Comandante regional avalia pesquisa e toma decisão (indeferir ou aprovar).

Regras: Apenas usuários com permissão podem acessar ou modificar o fluxo.

### Efetivo e Dados da Agência

#### Consulta de Efetivo SinPoM:

Permitir visualização de efetivo por unidade, incluindo filtros.

Exibir dados em modal detalhado.

### Dados da Agência:

Interface para edição e gravação de informações cadastrais da agência:

Regras: Restringir edição aos dados da própria agência.

### Suporte e Treinamento

#### Tutorial:

Exibir cards com títulos e players de vídeo para aprendizado.

#### Ajuda:

Permitir abertura de chamados com preenchimento de descrição.

Listar chamados criados com status e respostas do sistema.
