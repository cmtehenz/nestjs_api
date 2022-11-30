# Registro de Ponto API
## Um cliente (Fictício) da Brainny Smart Solutions realizou uma solicitação de desenvolvimento que consiste na implementação de um sistema para o gerenciamento de Registros de Ponto dos colaboradores de uma empresa.

A necessidade é que tenhamos um ambiente WEB administrativo, para o gerenciamento do sistema como um todo e principalmente os registros de horário dos colaboradores e um ambiente WEB, no qual cada colaborador efetuará autenticação e realizará o registro do seu ponto diariamente.


Tabela de conteúdos
=================
<p align="center">
 <a href="#Features">Features</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#Documentação">Documentação</a> • 
 <a href="#licenca">Licença</a> • 
 <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	🚧  React Select 🚀 Em construção...  🚧
</h4>

### Features

#### Requisitos Funcionais
- [x] [RF01] - Gerenciar registros de horários;
- [x] [RF02] - Registrar horário de entrada e saída do colaborador;
- [x] [RF03] - O usuário com permissão de administrador poderá visualizar em tempo real os registros dos colaboradores, sem a necessidade refresh de página.


#### Requisitos Não Funcionais
- [x] [RNF01] - Apenas os colaboradores podem bater o ponto;
- [x] [RNF02] - Apenas o administrador do sistema poderá visualizar a lista com os registros dos colaboradores;
- [x] [RNF03] - O sistema utilizará autenticação com JWT;
- [x] [RNF04] - Desenvolvimento de API em Node;
- [x] [RNF05] - As mensagens de retorno da API precisam ser de fácil interpretação pela aplicação cliente;


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/cmtehenz/nestjs_api>

# Acesse a pasta do projeto no terminal/cmd
$ cd nestjs_api

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Nestjs](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeOrm](https://typeorm.io/)
- [JestJS](https://jestjs.io/pt-BR/)
- [PostgreSQL](https://www.postgresql.org/)

### Documentação

A documentação foi feita em Swagger para acessar é necessário iniciar o app ira encontrar em:
http://localhost:3000/api/

### Autor
---

<a href="#">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/10881123?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gustavo Costa</b></sub></a> <a href="#" title="Gustavo Costa">🚀</a>


Feito com ❤️ por Gustavo Costa 👋🏽 Entre em contato!

 [![Linkedin Badge](https://img.shields.io/badge/-Gustavo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gustavo-a-costa-dev/)](https://www.linkedin.com/in/gustavo-a-costa-dev/) 
[![Gmail Badge](https://img.shields.io/badge/-cmtehenz@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cmtehenz@gmail.com)](mailto:cmtehenz@gmail.com)