---
sidebar_position: 4
---

# Estrutura do Banco de Dados

## Overview

O banco de dados do SINPOM é a espinha dorsal do sistema, permitindo armazenamento e a recuperação de dados criticos da plataforma, incluindo contas de usuários, funções, logs de acesso e entidades específicas. Ele usa o MySQL como sgbd, e foi projetado para funcionar perfeitamente com o ORM do Laravel (Eloquent) e é estruturado para se alinhar à arquitetura MVC.

## Tabelas Principais

1. **`users`**: Gerencia detalhes da conta do usuário

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

2. **`roles`**: Tabela de funções do SINPOM.

## Principais Relacionamentos

:::danger

Em breve

:::

## ER Diagram

:::danger

Em breve

:::
