---
date: 2019-03-19
tags:
  - Git
  - Linux
author: Guilherme Passos
location: Brasil
---

# Fetch

Isso documenta as partes polyfillable do padrão WHATWG Fetch. Veja Advertências para exceções notáveis.

Sinopse de uso (use os links de argumento para saber mais):

```javascript
fetch(url, options).then(
  function(response) {
    // handle HTTP response
  },
  function(error) {
    // handle network error
  }
)
```

</br>
Exemplo de uso mais abrangente:

```javascript
fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'same-origin'
}).then(
  function(response) {
    response.status //=> number 100–599
    response.statusText //=> String
    response.headers //=> Headers
    response.url //=> String

    return response.text()
  },
  function(error) {
    error.message //=> String
  }
)
```

## Request

```javascript
Synopsis: new Request(url, options)
```

Request representa uma requisição HTTP a ser executado via fetch (). Normalmente, uma requisição não precisa ser construída manualmente, pois é instanciada internamente quando fetch () é chamado.

### URL (Request or string)

A URL do recurso que está sendo buscado. Normalmente, este é um URL absoluto sem o componente host, por exemplo, "/path". Se o URL tiver o host de outro site, a solicitação será realizada de acordo com o CORS.

Qualquer objeto que não seja de Solicitação será convertido em uma String, possibilitando passar uma instância de URL, por exemplo.

Uma solicitação pode ser inicializada usando outra instância de Request no lugar da URL. Nesse caso, a URL e outras opções são herdadas do objeto Request fornecido.

## Options

- method (String) - HTTP request method. Default: "GET"
- body (String, body types) - HTTP request body
- headers (Object, Headers) - Default: {}
- credentials (String) - Authentication credentials mode. Default: "omit"
  - "omit" - don't include authentication credentials (e.g. cookies) in the request
  - "same-origin" - include credentials in requests to the same site
  - "include" - include credentials in requests to all sites

### Body types

| Class           | Default Content-Type                            |
| --------------- | ----------------------------------------------- |
| String          | text/plain;charset=UTF-8                        |
| URLSearchParams | application/x-www-form-urlencoded;charset=UTF-8 |
| FormData        | multipart/form-data                             |
| Blob            | inherited from the blob.type property           |
| ArrayBuffer     |                                                 |
| TypedArray      |                                                 |
| DataView        |                                                 |

Outras estruturas de dados precisam ser codificadas previamente como um dos tipos acima. Por exemplo, JSON.stringify(data) pode ser usado para serializar uma estrutura de dados em uma sequência JSON.

Observe que os servidores HTTP geralmente exigem que as solicitações postadas com um corpo também especifiquem seu tipo por meio de um cabeçalho de solicitação Content-Type.

## Response

Response representa uma resposta HTTP do servidor. Normalmente, uma response não é construída manualmente, mas está disponível como argumento para o retorno de chamada prometido resolvido.

### Properties

- status (number) - HTTP response code in the 100–599 range
- statusText (String) - Status text as reported by the server, e.g. "Unauthorized"
- ok (boolean) - True if status is HTTP 2xx
- headers (Headers)
- url (String)

### Body methods

Cada um dos métodos para acessar o corpo da resposta retorna uma Promessa que será resolvida quando o tipo de dados associado estiver pronto.

- text() - yields the response text as String
- json() - yields the result of JSON.parse(responseText)
- blob() - yields a Blob
- arrayBuffer() - yields an ArrayBuffer
- formData() - yields FormData that can be forwarded to another request

### Other response methods

- clone()
- Response.error()
- Response.redirect()

## Headers

```javascript
Synopsis: new Headers(hash)
```

Headers representa um conjunto de cabeçalhos HTTP de request/response. Ele permite uma pesquisa sem distinção entre maiúsculas e minúsculas do cabeçalho por nome, além de mesclar vários valores de um único cabeçalho.

### Methods

- has(name) (boolean)
- get(name) (String)
- set(name, value)
- append(name, value)
- delete(name)
- forEach(function(value, name){ ... }, [thisContext])

## Error

Se houver um erro de rede ou outro motivo pelo qual a solicitação HTTP não pôde ser atendida, a promessa fetch () será rejeitada com uma referência a esse erro.

Observe que a promessa não será rejeitada no caso de respostas do servidor HTTP 4xx ou 5xx. A promessa será resolvida como seria para o HTTP 2xx. Inspecione o número response.status no retorno de chamada resolvido para adicionar tratamento condicional de erros do servidor ao seu código.

```javascript
fetch(...).then(function(response) {
  if (response.ok) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
})
```

## Advertências

O polyfill whatwg-fetch não é capaz nem tem como objetivo implementar todo o padrão WHATWG Fetch, já que alguns dos recursos padrão seriam não triviais ou de outro modo inviáveis. Exemplos notáveis ​​incluem:

- Incapacidade de definir o modo de redirecionamento
- Incapacidade de alterar a diretiva de cache
- Incapacidade de desativar cookies da mesma origem
