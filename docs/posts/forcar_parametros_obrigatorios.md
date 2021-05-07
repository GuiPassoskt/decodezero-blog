---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Forçar paramentros obrigatórios

Dentro do JavaScript, diferente de algumas outras linguagens de programação, caso uma função tenha em sua declaração algum parâmetro e na hora que ela for invocada este parâmetro não seja informado dentro dos argumentos, a função executa normalmente.

Isso é ótimo pra alguns casos e péssimo pra outros... O ponto é: você precisa prestar atenção nisso!

Porém... existe uma #trick pra pararmos a função caso algum parâmetro que queiramos que seja obrigatório não seja informado!

```javascript
function required() {
  throw new Error('Required param')
}

function printName(name = required()) {
  console.log(name)
}

printName() // Uncaught Error: Required param

printName('Guilherme') // Guilherme
```
