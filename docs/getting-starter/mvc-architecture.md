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

### 16. DocumentHasDifusaoAnterior Model

Registra histórico de difusões anteriores de documentos.

#### Table: `document_has_difusao_anterior`

| Column             | Type    | Description             |
| ------------------ | ------- | ----------------------- |
| `id`               | integer | Primary Key             |
| `opm_structure_id` | integer | FK para `opm_structure` |

Campos protegidos por `$guarded = ['id']`

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

- `entity_people_involved_status()`: **belongsTo** `App\EntityPeopleInvolvedStatus`
- `staff()`: **belongsTo** `App\Staff`
- `endereco()`: **hasMany** `App\EntityPeopleAddress`
- `involved_firearms()`: **belongsToMany** `App\EntityFirearm`
- `created_by()`: **belongsTo** `App\Staff` via `created_by_staff_id`
- ... (12+ relações com modelos de apelidos, imagens, mandados, etc.)

#### Attributes:

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

#### Relationships:

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

_O campo `cor` ou `hex_code` deve ser definido na migração_

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

#### Relationships:

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

_O campo `funcao` depende da criação na migração._

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

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

#### Relationships:

(Nenhum relacionamento definido no código fornecido)

#### Scopes:

(Nenhum scope definido no código fornecido)

### 42. EntityPeopleSituacaoFuncional Model

Representa a situação funcional das pessoas no sistema.

#### Table: `entity_people_situacao_funcional`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

#### Relationships:

(Nenhum relacionamento definido no código fornecido)

#### Scopes:

(Nenhum scope definido no código fornecido)

### 43. Faccao Model

Representa facções no sistema com auditoria de alterações (OwenIt/Auditing).

#### Table: `faccoes`

| Column | Type    | Description |
| ------ | ------- | ----------- |
| `id`   | integer | Primary Key |

Campos protegidos por `$guarded = ['id']`

#### Relationships:

(Nenhum relacionamento definido no código fornecido)

#### Scopes:

(Nenhum scope definido no código fornecido)

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
