---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# A Diferença entre for in e for of

For, for...in, for...of, forEach... 300 formas de fazer a mesma coisa 😂

Mas falando de for in e for of, eles são semelhantes, mas não iguais! O for...in itera sob as chaves (posições) do array, enquanto o for...of itera nos valores, simples assim!

```javascript
const techs = ['ReactJS', 'React Native', 'NodeJS']

for (let keys in techs) {
  console.log(keys) // Return array indexs: 0, 1 e 2
}

for (let value of techs) {
  console.log(values) // Return array values: ReactJS, React Native e NodeJS
}
```
