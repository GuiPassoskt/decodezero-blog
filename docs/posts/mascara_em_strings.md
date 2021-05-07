---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Máscara em Strings

Normalmente armazenamos no banco de dados apenas os números de informações como telefone e CPF e, quando exibimos para os usuários, é interessante manter estes dados formatados.

E isso é uma missão bem simples com JavaScript! Bastam algumas poucas linhas e código e pronto

```javascript
function mask(value, pattern) {
  let i = 0
  const v = value.toString()

  return patter.replace(/#/g, () => v[i++] || '')
}

const masked = mask('41997899089', '(##) #####-####')

console.log(masked) // (41) 99789-9089
```
