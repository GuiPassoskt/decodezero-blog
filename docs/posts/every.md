---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Testar todos itens de um array

Pode ser que em algum momento você precise criar uma condição na sua aplicação em que todos os itens de um array precisem passar por alguma validação pra aí sim executar alguma ação... Aí entra o #every!

```javascript
const numbers = [11, 9, 12, 23]
const over10 = numbers.every(number => number > 10) // false

const people = [
  { name: 'Ozzy', age: 70 },
  { name: 'Matt Shadows', age: 38 },
  { name: 'Robert Plant', age: 71 }
]

const everybodyIsAdult = people.every(person => person.age >= 21) // true
```
