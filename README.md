# cs20231_g7
Grupo 7 - UniRent
## cs_20237

  ### UniRent
    Sistema Web destinado a facilitar universitários a encontrar moradias individuais ou compartilhadas.  
  

## Grupo
Esta API será construída pelos componentes do grupo 7:

|Matrícula|Nome|Usuário Git|
|---|---|---|
|201905520|Alisson Braz Domingues|[alisson-b](https://github.com/alisson-b)|
|202107999|Bruna do Espirito Santo Sousa|[brunadoesp](https://github.com/brunadoesp)|
|202105038|João Gabriel Tavares Felix Monteiro|[JoaoUFG](https://github.com/JoaoUFG)|
|202204199|Maicon Brendo da Silva|[MaiconBDSilva](https://github.com/MaiconBDSilva)|
|202105055|Vitor Lima Ribeiro|[TheLastAurora](https://github.com/TheLastAurora)|

### Requisitos Funcionais
#### Visitante

RF001 Cadastrar uma conta
RF002 - Visualizar avaliações
RF003 - Visualizar lista de todas as residências anunciadas
RF004 - Visualizar as principais informações disponibilizadas pelo locador (título, foto de capa, valor, endereço, condomínio)
RF005 - Visualizar todas as informações disponibilizadas pelo locador (título, foto de capa, valor, endereço, condomínio, link de localização, quantidade de vagas, descrição, contato, todas as imagens/vídeo) 

#### Usuário cadastrado
RF006 - Realizar Login
RF007 - Realizar Logoff
RF008 - Recuperar a Senha
RF009 - Reportar anúncio
RF010 - Favoritar anúncio
RF011 - Editar dados pessoais
RF012 - Apagar a conta

#### Locador
RF013 - Cadastrar um ou mais anúncios de aluguéis
RF014 - Adicionar detalhes do imóvel anunciado
RF015 - Definir tipos diferentes de Moradia em um anúncio
RF016 - Controlar a sublocação/locação conjunta de anúncios
RF017 - Deletar anúncio
RF018 - Alterar status de anúncio
RF019 - Editar anúncio
RF020 - Adicionar mídia do imóvel em cada anúncio (foto/vídeo)
RF021 - Adicionar o valor do aluguel
RF022 - Adicionar o valor do condomínio (caso haja)
RF023 - Adicionar título ao anúncio
RF024 - Adicionar endereço do imóvel ao anúncio
RF025 - Adicionar link de localização do imóvel ao anúncio
RF026 - Adicionar quantidades de cômodos do imóvel ao anúncio (quarto, banheiro, etc.)
RF027 - Adicionar quantidade de vagas para estacionamento de veículos do anúncio (caso haja)
RF028 - Adicionar telefone e/ou redes sociais ao anúncio, e permitir selecionar "WhatsApp" para exibir a logo do WhatsApp
RF029 - Adicionar área total e área construída ao anúncio
RF030 - Responder mensagens de possíveis locatários através de um chat do próprio aplicativo



## Requisitos Não Funcionais
#### Segurança
RNF001: Pessoas sem cadastro serão vistas pelo sistema como visitantes.
RNF002: O navegador armazenará em cache as sessões do usuário em até 30 minutos.
RNF003: Usuários verificados por 2 fatores irão poder ficar logados até 3 dias sem perder as credenciais no cache do navegador.

#### Performance
RNF004: As buscas e requisições ao servidor serão feitas em paginação/lazy loading, com a quantidade (size) sendo definida pelo tempo que a página demora a renderizar o registro (mínimo 1 segundo).
RNF005: A busca por residências não deve demorar mais de 3 segundos para retornar uma resposta.

#### Usabilidade
RNF006 Design responsivo do sistema web, para que seja possível a sua utilização em um smartphone.


### Regras de Negócio
1. RN01 - <descrever>
2. RN02 - <descrever>

<Adicionar outras regras, se existirem.>

### Tecnologia de _Front-end_
  - React 

### Tecnologia de _Back-end_
  - Node.js
  - Express Framework

### Tecnologia de Persistência de Dados
  - MySQL
  
### Local do _Deploy_
  - Amazon RDS
  - Amazon EC2

### Cronograma de Desenvolvimento

|Iteração|Tarefa|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Definição do tema e planejamento|17/04/2023|05/05/2023|Vitor Lima|CONCLUÍDO|
|2|Engenharia de Requisitos|06/05/2023|19/05/2023|Vitor Lima|EM ANDAMENTO|
|3|Modelagem e prototipação|20/05/2023|02/06/2023|Vitor Lima|Programada|
|4|Desenvolvimento e testes do MVP|03/06/2023|16/06/2023|Vitor Lima|Programada|
|5|Deploy do MVP e desenvolvimento|17/06/2023|20/05/2023|Vitor Lima|Programada|
|6|Desenvolvimento, testes e deploy 1|01/07/2023|21/07/2023|Vitor Lima|Programada| 
|7|Desenvolvimento, testes e deploy 2|22/07/2023|11/08/2023|Vitor Lima|Programada|

