# Unirent-Backend
## Endpoints 
| URL                   | Objeto JSON a enviar              | Objeto JSON e status a retornar      |
|-----------------------|-----------------------------------|--------------------------------------|
| `./usuario/cadastro`  | `{email,senha,nome,universidade}` | `{token}`  (será retornado o token ) | 
| `./usuario/login`     | `{email,senha}`                   | `{token}`  (será retornado o token ) |
| `./usuario/verificar` | `{token}` enviem somente o token  | `200`  se válido                     |

