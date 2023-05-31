# Unirent-Backend
## Endpoints 

| URL                   | Objeto JSON a enviar              | Objeto JSON e status a retornar |
|-----------------------|-----------------------------------|---------------------------------|
| `./usuario/cadastrar` | `{email,senha,nome,universidade}` | `{token}`                       | 
| `./usuario/login`     | `{email,senha}`                   | `{token}`                       |
| `./usuario/verificar` | `{token}` enviem somente o token  | `STATUS 200`  se válido         |


