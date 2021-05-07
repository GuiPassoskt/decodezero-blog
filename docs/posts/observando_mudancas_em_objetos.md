---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Observando mudanças em objetos

Precisa disparar uma função quando alguma propriedade de um objeto sofrer algum tipo de alteração?

Simples! Com o JavaScript conseguimos definir funções customizadas de #getters e #setters, dessa forma, a gente consegue monitorar toda vez que uma propriedade é acessada ou alterada de uma forma extremamente simples!

```javascript
const data = {}

Object.defineProperty(data, 'counter', {
  // Executa sempre que um valor for atribuido a data.counter
  set: value => {
    console.log(`Value chaged to: ${value}`)
    doSomethingWhenValueChanges(value)
  }
})

data.counter = 2 // Value chaged to: 2
```
