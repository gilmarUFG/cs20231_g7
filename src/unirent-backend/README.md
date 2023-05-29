# Unirent-Backend
## Endpoints 
| URL                   |Método      |Obj JSON a enviar                 | Obj JSON  a retornar                 |
|-----------------------|------------|-----------------------------------|--------------------------------------|
| `./usuario/cadastro`  |    `POST`  |`{email,senha,nome,universidade}` | `{token}`                            | 
| `./usuario/login`     |    `POST`  |`{email,senha}`                   | `{token}`                            |
| `./usuario/verificar` |    `POST`  |`{token}` enviem somente o token  | `STATUS 200`  se válido              |

