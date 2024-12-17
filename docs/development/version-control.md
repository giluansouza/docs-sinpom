---
sidebar_position: 1
---

# Controle de Versão

## Práticas de Versionamento

- A branch `master` é a versão estável do sistema
- Desenvolva novas funcionalidades em uma branch diferente da `master` ex: 'feature/funcionalidade-nova'

## Fluxo de Trabalho em Desenvolvimento

1. Crie uma branch para a nova funcionalidade

```bash
git checkout -b 'feature/funcionalidade-nova'
```

2. Depois de implementar as alterações, faça o commit e envie a branch para o GitHub:

```bash
git add .
git commit -m 'Adicionando nova funcionalidade'
git push origin 'feature/funcionalidade-nova'
```

- Use boas práticas de commit messages, conforme [convention commits](https://www.conventionalcommits.org/en/v1.0.0/)
