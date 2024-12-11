---
sidebar_position: 1
---

# Versionamento com Git/GitHub

## Práticas de Versionamento

- A branch `master` é a versão estável do sistema
- Desenvolva novas funcionalidades em uma branch diferente da `master` ex: 'feature/funcionalidade-nova'

## Fluxo de Trabalho

1. Crie um branch para a nova funcionalidade

```bash
git checkout -b 'feature/funcionalidade-nova'
```

2. Depois de implementar as alterações, faça o commit e envie a branch para o GitHub:

```bash
git add .
git commit -m 'Adicionando nova funcionalidade'
git push origin 'feature/funcionalidade-nova'
```

:::danger

Estabelecer rotina de desenvolvimento/versionamento

:::
