---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Obter o maior e o menor numero do array

Quer descobrir o maior ou o menor número de um array?

Não, você não precisa usar um map, filter, forEach, e nem nada do tipo! Basta usar o Math.max.apply ou Math.min.apply e pronto! O JS faz o serviço por você!

```javascript
const numbers = [7, 890, -233, 798, 2334, 43, -937]

const heigher = Math.max.apply(Math, numbers) // 2334

const lower = Math.min.apply(Math, numbers) // -937
```
