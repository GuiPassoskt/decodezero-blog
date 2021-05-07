---
layout: post
title: Upload de arquivos com js puro
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Upload de arquivos com js puro

Bibliotecas pra fazer upload de arquivos com JavaScript a gente ve de monte por aí, mas... e se você precisar fazer na mão? Sabe como fazer?

Bom, agora você sabe!

O JavaScript tem um carinha chamado #FormData de forma nativa, com ele, conseguimos construir objetos de chave e valor e estes valores podem ser tanto strings normais (valores de inputs), como também podem ser objetos de arquivos! Depois de montar é só mandar a request pra uma API e já era!

```html
<input type="file" onchange="selectFile(this.files)" />

<script>
  // Desctructuring em "file" para pegar o primeiro item do array
  function selectFile([file]) {
    const data = new FormData()
    data.append('file', file)

    api.post('/files/upload', data)
  }
</script>
```
