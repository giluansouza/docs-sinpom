---
sidebar_position: 3
---

# Arquitetura MVC

## Arquitetura do Projeto

O SINPOM utiliza uma arquitetura **MVC (Model-View-Controller)** que é o padrão adotado pelo framework Laravel.

## Controllers

### PainelController

Gerencia o painel do usuário, ações relacionadas ao perfil e visualizações condicionais de acordo com as permissões do usuário.

#### Key Methods:

- `index(Request $request)`: Exibe painel dashboard ou redireciona com base nas permissões do usuário
- `tutorial(Request $request)`: Exibe a página de tutorials para o usuário.

#### Dependencies:

- `CustomQueries`: Recupera dados de consultas personalizadas, como ocorrências por tipo.
- `Google2FA`: Usado para autenticação de dois fatores (não é utilizado ativamente no método index(), mas é referenciado).
- `Carbon`: Gerencia cálculos de datas, especialmente para o ano atual.
- `News`: Recupera notícias para exibição no painel.
- `PriorityTarget`: Obtém alvos prioritários para exibição.
- `Auth`: Gerencia o usuário autenticado.
- `Crypt`: Criptografa dados sensíveis.
- `Staff`: Recupera informações de perfil do usuário para verificações de dados adicionais.

## Models

### 1. Agent Model

Representa agentes no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `agents`

| Column     | Type    | Description              |
| ---------- | ------- | ------------------------ |
| `id`       | integer | Primary Key              |
| `staff_id` | integer | Foreign Key para `staff` |

Campos protegidos por `$guarded = ['id']`

#### Relationships:

- `staff()`: Relacionamento **belongsTo** com `App\Staff` (um agente pertence a um membro do staff).

#### Scopes:

(Nenhum scope definido no código fornecido)

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

- `readers()`: **belongsToMany** `App\User` (usuários que leram o documento)
- `status()`: **hasOne** `App\DocumentHasDifusao`
- `planop()`: **hasOne** `App\DocumentPlanoDeOperacoes`
- `opm_structure()`: **belongsTo** `App\OpmStructure`
- `staff()`: **belongsTo** `App\Staff`
- `referencia()`: **belongsTo** `App\Document` (auto-relacionamento)
- ... (demais relações como `entity_people_involvement`, `attachment`, etc.)

#### Scopes:

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

#### Relationships:

- `document()`: **belongsTo** `App\Document`
- `criado_por_staff()`: **belongsTo** `App\Staff` via `criado_por_staff_id`
- `destinatario_staff()`: **belongsTo** `App\Staff` via `destinatario_staff_id`
- ... (demais relações seguem padrão similar para `rank` e `opm_structure`)

---

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
├── 📂 ad/
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
├── 📂 documents/
├── 📂 emails/
├── 📂 entidades/
├── 📂 faccao/
├── 📂 google2fa/
├── 📂 improvementcourse/
├── 📂 layouts/
├── 📂 news/
├── 📂 occurrence/
├── 📂 opm/
├── 📂 opm_resources/
├── 📂 painel/
├── 📂 search/
├── 📂 signature/
├── 📂 sinmail/
├── 📂 staff/
├── 📂 statistic/
├── 📂 support/
├── 📂 taskorganization/
├── 📂 termsandconditions/
├── 📂 vendor/
└── mapa.blade.php
```

## Classes

### CustomRequestCaptcha Class

Classe de serviço para personalizar o método de requisição do reCAPTCHA.

**Observação:**

- Implementa `custom()` para retornar método POST personalizado.

---
