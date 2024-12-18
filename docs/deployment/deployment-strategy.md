---
sidebar_position: 1
---

# Estratégia de Implantação

## Ambiente de Produção

1. **Servidor**: Configurar o ambiente com Docker e Traefik.
2. **Build do Sistema**:

- Executar `composer install`
- Executar migrações: `php artisan migrate`
- Popular banco de dados: `php artisan db:seed`

3. **Configuração de Domínio**:

- Atualizar DNS para apontar para o IP do servidor.
- Configurar certificado SSL.

## Rotina de Atualizações

1. Criar uma nova branch para alterações
2. Após testes, mergear para a branch `master`
