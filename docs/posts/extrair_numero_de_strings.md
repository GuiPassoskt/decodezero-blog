---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Extrair numero de strings

Tem um formulário cheio de máscaras pra CPF, RG, Telefone ou outros dados númericos?
A melhor forma de armazenar esses tipos de dados no banco é salvar somente os números, sem as máscaras (depois você pode aplicar uma máscara na hora de exibir com uma funçãozinha bem dahora que já postei aqui no insta, da uma rolada aí pra baixo). Bom, pra fazer isso basta uma simples função de apenas uma linha e tcharam! Pronto!

```javascript
function extractNumbers(string) {
  return string ? string.replace(/\D/g, '') : string
}

const cpf = extractNumbers('123.456.789-10')

console.log(cpf) // 12345678910
```
