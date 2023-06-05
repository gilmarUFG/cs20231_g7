# Unirent-Backend
## Endpoints 


## API de Usuário

| Endpoint                      | Método | Descrição                                    | Corpo da Requisição (JSON)                                                             | Objeto JSON e Status a Retornar (JSON)    |
|-------------------------------|--------|----------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------|
| `/usuario/cadastrar`          | POST   | Cadastra um novo usuário                     | `{ "email": "string", "senha": "string", "nome": "string", "universidade": "string" }` | `{ "token": "string" }`                   |
| `/usuario/login`              | POST   | Realiza o login de um usuário                | `{ "email": "string", "senha": "string" }`                                             | `{ "token": "string" }`                   |
| `/usuario/listar`             | GET    | Lista todos os usuários                      | -                                                                                      | Array de usuários com dados não sensíveis |

## API de Anúncios

| Endpoint                 | Método | Descrição                                 | Corpo da Requisição (JSON)                                                                                                         | Objeto JSON e Status a Retornar (JSON) |
|--------------------------|--------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| `/anuncio/cadastrar/:id` | POST   | Cadastra um novo anúncio                  | Parametros da url: `id-> id do usuário` `{ "descricao": "string", "titulo": "string", "tipoMoradia": "number", "token":"string" }` | -                                      |
| `/anuncio/listar`        | GET    | Lista todos os anúncios                   | -                                                                                                                                  | Array de anúncios                      |


---------

<!-- 
| URL                   | Objeto JSON a enviar              | Objeto JSON e status a retornar |
|-----------------------|-----------------------------------|---------------------------------|
| `./usuario/cadastrar` | `{email,senha,nome,universidade}` | `{token}`                       | 
| `./usuario/login`     | `{email,senha}`                   | `{token}`                       |
| `./usuario/verificar` | `{token}` enviem somente o token  | `STATUS 200`  se válido         |

-->
