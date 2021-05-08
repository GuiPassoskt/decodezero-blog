---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Closures

Mais um pra série de nomes complicados pra coisas simples hahahaha!

Dessa vez vamos falar sobre #closures, e se você já usou ou usa, por exemplo, componentes funcionais no React (principalmente por conta dos Hooks), você com certeza já usou closures e nem sabia! Quer ver só?

Basicamente uma closure é uma função que é criada dentro do escopo de outra função, dessa forma, tendo acesso e usando os dados que foram criados no escopo da primeira!

Fazendo o paralelo com React: se você tem um formulário, por exemplo, onde você tem lá seus useStates de email e senha e ainda dentro do componente uma função de submit que pega esses valores e envia pra uma API ou dispara uma action... Sim, você já está usando closures e nem sabia!

```javascript
function sayHello(name) {
  const message = `Hello ${name}!`;
  function say() {
    alert(message);
  }

  say();
}

sayHello("Guilherme"); // Hello Guilherme!
```
