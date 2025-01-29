---
sidebar_position: 4
---

# Estrutura do Banco de Dados

## Visão Geral

O banco de dados do SINPOM é a espinha dorsal do sistema, permitindo armazenamento e a recuperação de dados criticos da plataforma, incluindo contas de usuários, funções, logs de acesso e entidades específicas. Ele usa o MySQL como sgbd, e foi projetado para funcionar perfeitamente com o ORM do Laravel (Eloquent) e é estruturado para se alinhar à arquitetura MVC.

## Tabelas Principais

### 1. **`users`**: Gerencia detalhes da conta do usuário

| Field Name        | Data Type    | Description                   |
| ----------------- | ------------ | ----------------------------- |
| id                | INT          | Primary key, auto-increment.  |
| name              | VARCHAR(255) | User's full name.             |
| email             | VARCHAR(255) | Unique email address.         |
| email_verified_at | TIMESTAMP    | Email verification timestamp. |
| password          | VARCHAR(255) | Encrypted password.           |
| remember_token    | VARCHAR(100) |                               |
| google2fa_secret  | VARCHAR(255) |                               |
| created_at        | TIMESTAMP    | Record creation timestamp.    |
| updated_at        | TIMESTAMP    | Record last update timestamp. |

### 2. **`staff`**: Tabela de funcionários

| Field Name         | Data Type       | Description                                              |
| ------------------ | --------------- | -------------------------------------------------------- |
| id                 | BIGINT unsigned | Primary key, auto-increment.                             |
| nome               | VARCHAR(191)    | Name of the staff member.                                |
| rank_id            | BIGINT unsigned | Foreign key, references `ranks.id` (permanent position). |
| opm_id             | BIGINT unsigned | Foreign key, references `opms.id` (unit).                |
| gender_id          | BIGINT unsigned | Foreign key, references `genders.id` (gender).           |
| leave_kind_id      | BIGINT unsigned | Status of the staff (functional situation).              |
| cpf                | VARCHAR(25)     | CPF (Brazilian personal identification number).          |
| data_de_nascimento | DATE            | Date of birth.                                           |
| endereco           | VARCHAR(191)    | Address of the staff member.                             |
| numero             | VARCHAR(25)     | Number of the address.                                   |
| bairro             | VARCHAR(191)    | Neighborhood of the staff member.                        |
| complemento        | VARCHAR(191)    | Address complement.                                      |
| cidade             | VARCHAR(191)    | City of residence.                                       |
| uf                 | VARCHAR(30)     | State of residence.                                      |
| cep                | VARCHAR(25)     | Postal code.                                             |
| rg                 | VARCHAR(25)     | RG (General Registration number).                        |
| orgao_expedidor    | VARCHAR(20)     | Issuing authority of RG.                                 |
| data_de_admissao   | DATE            | Date of admission.                                       |
| mae                | VARCHAR(191)    | Mother's name.                                           |
| pai                | VARCHAR(191)    | Father's name.                                           |

### 3. **`documents`**: Tabela de documentos.

| Field Name            | Data Type       | Description                        |
| --------------------- | --------------- | ---------------------------------- |
| id                    | BIGINT unsigned | Primary key, auto-increment        |
| document_kind_id      | BIGINT unsigned | tipo do documento                  |
| staff_id              | BIGINT unsigned | matricula do criador               |
| rank_id               | BIGINT unsigned | posto/graduacao do criador         |
| opm_structure_id      | BIGINT unsigned | seção do criador do documento      |
| assinado_por          | BIGINT unsigned | assinatura do documento finalizado |
| assinado_por_rank     | BIGINT unsigned | assinatura do documento finalizado |
| reference_document_id | BIGINT unsigned | documento que deu origem a este    |
| reply_document_id     | BIGINT unsigned |                                    |
| util_ate              | DATE            | prazo aceitável do documento       |
| conteudo              | TEXT            |                                    |
| difundido             | TINYINT(1)      |                                    |
| bloqueio_sap          | TINYINT(1)      |                                    |
| assunto               | VARCHAR(191)    |                                    |
| referencias           | VARCHAR(191)    |                                    |
| created_at            | TIMESTAMP       | Record creation timestamp.         |
| updated_at            | TIMESTAMP       | Record last update timestamp.      |

### 4. **`entity_people`**: Tabela de entidade de pessoas

| Field Name                          | Data Type       | Description                      |
| ----------------------------------- | --------------- | -------------------------------- |
| id                                  | BIGINT unsigned | Primary key, auto-increment.     |
| nome                                | VARCHAR(191)    | Name of the person.              |
| pai                                 | VARCHAR(191)    | Father's name.                   |
| mae                                 | VARCHAR(191)    | Mother's name.                   |
| apelido                             | VARCHAR(191)    | Nickname of the person.          |
| profissao                           | VARCHAR(191)    | Profession of the person.        |
| staff_id                            | BIGINT          | Reference to staff.              |
| opm_id                              | BIGINT unsigned | Reference to OPM.                |
| entity_people_situacao_funcional_id | BIGINT          | Functional situation reference.  |
| entity_people_involved_status_id    | BIGINT          | Involved status reference.       |
| gender_id                           | BIGINT          | Gender reference.                |
| entity_people_color_id              | BIGINT          | Color reference.                 |
| entity_people_priority_level_id     | BIGINT          | Priority level reference.        |
| data_de_nascimento                  | DATE            | Date of birth.                   |
| em_servico                          | TINYINT         | Indicates if on service.         |
| created_at                          | TIMESTAMP       | Record creation timestamp.       |
| updated_at                          | TIMESTAMP       | Last update timestamp.           |
| weapon_kind_id                      | BIGINT unsigned | Reference to weapon kind.        |
| lesoes_multiplas                    | TINYINT         | Indicates multiple injuries.     |
| cpf                                 | VARCHAR(191)    | CPF number.                      |
| rg                                  | VARCHAR(191)    | RG number.                       |
| created_by_staff_id                 | BIGINT unsigned | Staff ID who created the record. |
| PRIMARY KEY                         | ID              | Primary key of the table.        |
| FOREIGN KEY (created_by_staff_id)   | STAFF(ID)       | References `staff` table.        |
| FOREIGN KEY (opm_id)                | OPMS(ID)        | References `opms` table.         |

### 5. **`occurrences`**: Tabela de registro de ocorrências

| Field Name                   | Data Type       | Description                                               |
| ---------------------------- | --------------- | --------------------------------------------------------- |
| id                           | BIGINT unsigned | Primary key, auto-increment.                              |
| city_id                      | BIGINT unsigned | Reference to the city.                                    |
| opm_id                       | BIGINT unsigned | Reference to the OPM.                                     |
| staff_id                     | BIGINT unsigned | Staff who registered the occurrence.                      |
| rank_id                      | BIGINT unsigned | Rank of the staff who registered the occurrence.          |
| endereco                     | VARCHAR(191)    | Address of the occurrence.                                |
| bairro                       | VARCHAR(191)    | Neighborhood where the occurrence happened.               |
| ponto_de_referencia          | VARCHAR(191)    | Reference point for the occurrence location.              |
| num_ocorrencia               | VARCHAR(191)    | Occurrence number.                                        |
| data                         | DATE            | Date of the occurrence.                                   |
| hora                         | TIME            | Time of the occurrence.                                   |
| objetos                      | TEXT            | Objects involved in the occurrence.                       |
| descricao                    | TEXT            | Description of the occurrence.                            |
| created_at                   | TIMESTAMP       | Record creation timestamp.                                |
| updated_at                   | TIMESTAMP       | Last update timestamp.                                    |
| opm_area                     | BIGINT          | Reference to the OPM area.                                |
| occurrence_id_motivadora     | BIGINT          | Reference to motivating occurrence.                       |
| pode_gerar_desdobramentos    | TEXT            | Indicates if the occurrence can generate follow-ups.      |
| motivacao_id                 | BIGINT          | Reference to the occurrence motivation.                   |
| faccao_id                    | BIGINT          | Reference to the faction involved.                        |
| zona_id                      | BIGINT unsigned | Reference to the zone.                                    |
| vehicle_kind_id              | BIGINT unsigned | Reference to the kind of vehicle involved.                |
| staff_id_registro            | BIGINT unsigned | Reference to the staff who recorded the occurrence.       |
| pm_ameacado                  | TINYINT         | Indicates if a police officer was threatened.             |
| meios_ameaca_id              | BIGINT          | Reference to the means of threat.                         |
| meio_ameaca_descricao        | VARCHAR(191)    | Description of the threat means.                          |
| providencia_adotada          | VARCHAR(191)    | Adopted measures regarding the occurrence.                |
| situacao_id                  | BIGINT unsigned | Reference to the occurrence situation.                    |
| modalidade_id                | BIGINT unsigned | Reference to the occurrence modality.                     |
| estabelecimento_comercial_id | BIGINT unsigned | Reference to a commercial establishment.                  |
| instituicao_financeira_id    | BIGINT unsigned | Reference to a financial institution.                     |
| nome_estabelecimento         | VARCHAR(191)    | Name of the commercial establishment.                     |
| meio_empregado_inst_finan_id | BIGINT unsigned | Reference to the means used at the financial institution. |
| finalizada                   | TINYINT         | Indicates if the occurrence is finalized.                 |
| PRIMARY KEY                  | ID              | Primary key of the table.                                 |
| FOREIGN KEY (opm_id)         | OPMS(ID)        | References the `opms` table.                              |
| FOREIGN KEY (staff_id)       | STAFF(ID)       | References the `staff` table.                             |
| FOREIGN KEY (rank_id)        | RANKS(ID)       | References the `ranks` table.                             |

### 6. **`opms`**: Tabela de OPMs

| Field Name      | Data Type        | Description                                         |
| --------------- | ---------------- | --------------------------------------------------- |
| id              | BIGINT unsigned  | Primary key, auto-increment.                        |
| nome            | VARCHAR(191)     | Name of the unit.                                   |
| descricao       | VARCHAR(191)     | Description of the unit.                            |
| opm_superior_id | BIGINT           | ID of the superior unit (nullable).                 |
| ativa           | TINYINT(1)       | Status of the unit (active/inactive).               |
| opm_kind_id     | BIGINT unsigned  | Foreign key, references `opm_kinds.id`.             |
| cpr_id          | BIGINT unsigned  | ID of the CPR (nullable).                           |
| grande_comando  | TINYINT unsigned | Indicates whether it is a large command (nullable). |

### 7. **`opm_structures`**: Estrutura de hierarquia das OPMs

| Field Name | Data Type       | Description                                                             |
| ---------- | --------------- | ----------------------------------------------------------------------- |
| id         | BIGINT unsigned | Primary key, auto-increment.                                            |
| parent_id  | BIGINT unsigned | Reference to the parent structure, forming a hierarchical relationship. |
| nome       | VARCHAR(191)    | Name of the structure.                                                  |
| opm_id     | BIGINT unsigned | Reference to the related OPM.                                           |

### 8. **`faccoes`**: Tabela de facções

| Field Name | Data Type       | Description                  |
| ---------- | --------------- | ---------------------------- |
| id         | BIGINT unsigned | Primary key, auto-increment. |
| nome       | VARCHAR(191)    | Name of the criminal group.  |

## Principais Relacionamentos

### Relationamentos de `users`

![Diagrama relacionamento Users](./../assets/users_relationship.png)

### Relationamentos de `staff`

![Diagrama relacionamento Staff](./../assets/bd_sinpom-staff.png)

### Relationamentos de `documents`

![Diagrama relacionamento Documents](./../assets/documents_relationship.png)

### Relationamentos de `opms`

![Diagrama relacionamento OPMs](./../assets/bd_sinpom-opms.png)

### Relationamentos de `opm_structures`

![Diagrama relacionamento OPM Structures](./../assets/bd_sinpom-opm_structures.png)

### Relacionamentos de `faccoes`

![Diagrama relacionamento Facções](./../assets/bd_sinpom-faccoes.png)

## Exemplo de Consulta SQL

Lista todos os agentes de uma OPM ou de um CPR

```sql
   $user = Auth::user();
      $opm = Opm::find($request->opm_id);
      $isCpr = $opm ? $opm->grande_comando : null;
      $agentsQuery = User::join('staff', 'users.staff_id','=','staff.id')
         ->leftJoin('agent_request_for_inclusions', 'agent_request_for_inclusions.staff_id', '=', 'staff.id')
         ->join('opms','opms.id', '=', 'staff.opm_id')
         ->join('model_has_roles','users.id','=','model_has_roles.model_id')
         ->join('ranks','staff.rank_id','=','ranks.id')
         ->join('roles', 'roles.id', '=', 'model_has_roles.role_id')
         ->whereNotIn('roles.name', ['Comandante - OPM', 'Subcomandante - OPM', 'Comandante - CPR', 'Subcomandante - CPR'])
         ->when(($request->opm_id == $user->staff->opm_id) and ($isCpr), function($q) use ($request){
            $q->where('opms.cpr_id', $request->opm_id);
         })
         ->when($request->opm_id, function($q) use ($request){
            $q->where('staff.opm_id',$request->opm_id);
         })
         ->when(!$request->opm_id and $user->hasAnyPermission(['Consultar agentes OPM']), function($q) use ($user){
            $q->where('staff.opm_id',$user->staff->opm_id);
         })
         ->when(($request->staff_id) and $user->hasAnyPermission(['Consultar agentes OPM']), function($q) use ($request, $user){
            $q->where('staff.opm_id',$user->staff->opm_id)
            ->where('users.id', Crypt::decrypt($request->staff_id));
         })
         ->when(!$request->opm_id and $user->hasAnyPermission(['Consultar agentes CPR']), function($q) use ($user){
            $q->where('opms.cpr_id', $user->staff->opm->cpr_id);
         })
         ->when(($request->staff_id) and $user->hasAnyPermission(['Consultar agentes CPR']), function($q) use ($request, $user){
            $q->where('opms.cpr_id', $user->staff->opm->cpr_id)
            ->where('users.id', Crypt::decrypt($request->staff_id));
         })
         ->when(($request->staff_id) and $user->hasAnyPermission(['Ver todos agentes']), function($q) use ($request, $user){
            $q->where('users.id', Crypt::decrypt($request->staff_id));
         })->groupBy('staff.id');
      $agentsCountByRank = $agentsQuery->select('users.*')->orderBy('ranks.nivel')->get()->countBy('staff.rank.rank');
      $agents = $agentsQuery->select('users.*')->orderBy('ranks.nivel')->orderBy('staff.id')->paginate(50);
```

## Diagrama ER

![Diagrama ER](./../assets/bd_sinpom.png)

---
