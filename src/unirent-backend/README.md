# Unirent-Backend
## Endpoints 
| URL                  | Objeto JSON enviado               | Objeto JSON retornado                       |
|----------------------|-----------------------------------|---------------------------------------------|
| `./usuario/cadastro` | `{email,senha,nome,universidade}` | `{token}`  (será retornado o token somente) | 
| `./usuario/login`    | `{email,senha}`                   | `{token}`  (será retornado o token somente) |

