# Unirent-Backend
## Endpoints 


## API de Usuário

| Endpoint                      | Método | Descrição                                    | Corpo da Requisição (JSON)                                                             | Objeto JSON e Status a Retornar (JSON)    |
|-------------------------------|--------|----------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------|
| `/usuario/cadastrar`          | POST   | Cadastra um novo usuário                     | `{ "email": "string", "senha": "string", "nome": "string", "universidade": "string" }` | `{ "token": "string" }`                   |
| `/usuario/login`              | POST   | Realiza o login de um usuário                | `{ "email": "string", "senha": "string" }`                                             | `{ "token": "string" }`                   |
| `/usuario/listar`             | GET    | Lista todos os usuários                      | -                                                                                      | Array de usuários com dados não sensíveis |

## API de Anúncios

| Endpoint               | Método | Descrição                                                | Parametros da URL                                                                                                                         | Corpo da Requisição (JSON)                                                                                                                                                                                                                                                                                                                                              | Objeto JSON e Status a Retornar (JSON)                                                                                                                | Exemplo de URL                                                  |
|------------------------|--------|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| `/anuncio/cadastrar `  | POST   | Cadastra um novo anúncio                                 |                                                                                                                                           | `{"usuarioId": "number", "anuncio": {"tipoMoradia": "string", "dataPublicacao": "string", "tipoImovel": "string", "quartos": "number", "area": "number", "vagasGaragem": "number", "aceitaAnimais": "boolean", "valorAlguel": "number", "valorCondominio": "number", "valorIPTU": "number", "comodidades": "Array<string>", "descricao": "string"}, "token": "string"}` | -                                                                                                                                                     | POST http://localhost:3000/anuncio/cadastrar?id=1               |
| `/anuncio/listarTodos` | GET    | Lista todos os anúncios                                  | -                                                                                                                                         | -                                                                                                                                                                                                                                                                                                                                                                       | Array de anúncios                                                                                                                                     | GET http://localhost:3000/anuncio/listarTodos                   |
| `/anuncio/filtrar`     | POST   | Procura no banco os anuncios correspondentes aos filtros | `take` quantidade de registros desejados, `page` página do registro, `limit` tamanho da página. Obs: TODOS OS PARAMETROS SÃO OBRIGATÓRIOS | `{"tipoAluguel": "string", "valorAluguel":"number", "tamanho": "number", "quartos": "number", "descricaoLike": "string"}` Obs: todos os campos são opcionais                                                                                                                                                                                                            | `{"anuncios": [{anuncio}...], "total": "number", "pagina": "number", "registros": "number", "limitePorPagina":"number"}`  Obs: o dono não vem no JSON | GET http://localhost:3000/anuncio/filtrar?page=3&limit=5&take=5 |


---------

<!-- 
| URL                   | Objeto JSON a enviar              | Objeto JSON e status a retornar |
|-----------------------|-----------------------------------|---------------------------------|
| `./usuario/cadastrar` | `{email,senha,nome,universidade}` | `{token}`                       | 
| `./usuario/login`     | `{email,senha}`                   | `{token}`                       |
| `./usuario/verificar` | `{token}` enviem somente o token  | `STATUS 200`  se válido         |

-->
