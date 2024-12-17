---
sidebar_position: 2
---

# Casos de Uso

### Login no sistema

**Descrição:** O usuário deve realizar login no sistema para acessar os recursos do portal.
**Atores:** O usuário.
**Pre condições:**

- O usuário já possui uma conta ativa no sistema

**Fluxo Principal:**

1. O usuário acessa a página de login: https://sinpom.docker.localhost/login
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
