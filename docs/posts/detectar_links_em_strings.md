---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Detectar links em strings

Em alguns lugares (por exemplo no facebook), quando você faz um comentário com um link, ele é automaticamente convertido em uma âncora do HTML

```html
<a></a>
```

E tá aí abaixo uma função super simples que faz exatamente isso: encontra links em uma string (http ou https) e transforma numa âncora! Fácil assim!

```javascript
function urlify(string)
{
    const regex = /(https?:\/\/[^\s]+g);
    return string.replace(regex, '<a href="$1">$1</a>');
}

const message = 'Link: https://jspace.com.br';

const html = urlify(message);

// Output: "Link: <a href="https://jspace.com.br">https://jspace.com.br</a>"
```
