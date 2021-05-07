---
title: Some
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Some

O #some é bem parecido com o #every, e, como o nome dele já indica, ele testa se algum dos elementos do nosso array passa pela nossa regra!

```javascript
const numbers = [1, 5, -3, 8]
const hasNegative = numbers.some(number => number < 0) // true

const users = [
  { name: 'John', role: 'guest' },
  { namee: 'Tony', role: 'member' }
]

const hasAdmin = users.some(user => user.role === 'admin') // false
```
