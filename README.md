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

RF001 Cadastrar uma conta<br>
RF002 - Visualizar avaliações<br>
RF003 - Visualizar lista de todas as residências anunciadas<br>
RF004 - Visualizar as principais informações disponibilizadas pelo locador (título, foto de capa, valor, endereço, condomínio)<br>
RF005 - Visualizar todas as informações disponibilizadas pelo locador (título, foto de capa, valor, endereço, condomínio, link de localização, quantidade de vagas, descrição, contato, todas as imagens/vídeo) <br>

#### Usuário cadastrado
RF006 - Realizar Login<br>
RF007 - Realizar Logoff<br>
RF008 - Recuperar a Senha<br>
RF009 - Reportar anúncio<br>
RF010 - Favoritar anúncio<br>
RF011 - Editar dados pessoais<br>
RF012 - Apagar a conta<br>

#### Locador
RF013 - Cadastrar um ou mais anúncios de aluguéis<br>
RF014 - Adicionar detalhes do imóvel anunciado<br>
RF015 - Definir tipos diferentes de Moradia em um anúncio<br>
RF016 - Controlar a sublocação/locação conjunta de anúncios<br>
RF017 - Deletar anúncio<br>
RF018 - Alterar status de anúncio<br>
RF019 - Editar anúncio<br>
RF020 - Adicionar mídia do imóvel em cada anúncio (foto/vídeo)<br>
RF021 - Adicionar o valor do aluguel<br>
RF022 - Adicionar o valor do condomínio (caso haja)<br>
RF023 - Adicionar título ao anúncio<br>
RF024 - Adicionar endereço do imóvel ao anúncio<br>
RF025 - Adicionar link de localização do imóvel ao anúncio<br>
RF026 - Adicionar quantidades de cômodos do imóvel ao anúncio (quarto, banheiro, etc.)<br>
RF027 - Adicionar quantidade de vagas para estacionamento de veículos do anúncio (caso haja)<br>
RF028 - Adicionar telefone e/ou redes sociais ao anúncio, e permitir selecionar "WhatsApp" para exibir a logo do WhatsApp<br>
RF029 - Adicionar área total e área construída ao anúncio<br>
RF030 - Responder mensagens de possíveis locatários através de um chat do próprio aplicativo<br>



## Requisitos Não Funcionais
#### Segurança
RNF001: Pessoas sem cadastro serão vistas pelo sistema como visitantes.<br>
RNF002: O navegador armazenará em cache as sessões do usuário em até 30 minutos.<br>
RNF003: Usuários verificados por 2 fatores irão poder ficar logados até 3 dias sem perder as credenciais no cache do navegador.<br>

#### Performance
RNF004: As buscas e requisições ao servidor serão feitas em paginação/lazy loading, com a quantidade (size) sendo definida pelo tempo que a página demora a renderizar o registro (mínimo 1 segundo).<br>
RNF005: A busca por residências não deve demorar mais de 3 segundos para retornar uma resposta.<br>

#### Usabilidade
RNF006 Design responsivo do sistema web, para que seja possível a sua utilização em um smartphone.<br>


### Regras de Negócio
1. RN01 - <descrever>
2. RN02 - <descrever>

<Adicionar outras regras, se existirem.>

### Tecnologia de _Front-end_
  - React 

### Tecnologia de _Back-end_
  - Node.js
  - Express Framework
  - Sequelize

### Tecnologia de Persistência de Dados
  - MySQL 
  
### Local do _Deploy_
  - Amazon RDS
  - Amazon EC2
  - Amazon CloudFront

### Cronograma de Desenvolvimento

|Iteração|Tarefa|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Definição do tema e planejamento|17/04/2023|05/05/2023|Vitor Lima|CONCLUÍDO|
|2|Engenharia de Requisitos|06/05/2023|19/05/2023|Vitor Lima|CONCLUÍDO|
|3|1º sprint - modelagem, implementação, teste do MVP e deploy|20/05/2023|02/06/2023|Vitor Lima|CONCLUÍDO|
|4|2º sprint - modelagem, implementação, teste do MVP e deploy|03/06/2023|16/06/2023|Vitor Lima|CONCLUÍDO|
|5|3º sprint - modelagem, implementação, teste e deploy|17/06/2023|20/05/2023|Vitor Lima|EM ANDAMENTO|
|6|4º sprint - modelagem, implementação, teste e deploy|01/07/2023|21/07/2023|Vitor Lima|Programada| 
|7|5º sprint - modelagem, implementação, teste e deploy|22/07/2023|11/08/2023|Vitor Lima|Programada|



