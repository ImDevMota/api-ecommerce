# Sistema de Autenticação de Usuários

 Este é um projeto fullstack de autenticação de usuários, composto por uma API RESTful no backend e uma interface moderna no frontend. Ele foi desenvolvido com tecnologias seguras e atuais para gerenciar e autenticar usuários de forma eficiente.

---

## Tecnologias Utilizadas

### Backend
- **API RESTful**: Estrutura para criar endpoints que seguem os princípios REST.
- **Express.js**: Framework Node.js para criação do backend e rotas da API.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados dos usuários.
- **Prisma**: ORM que facilita o acesso e manipulação dos dados no banco MongoDB.
- **Bcrypt**: Biblioteca para criptografia e geração de hash, usada para proteger as senhas dos usuários.
- **JWT (JSON Web Token)**: Gera tokens para autenticar e autorizar requisições entre cliente e servidor.

### Frontend
- **Vite**: Build tool ultrarrápida usada para desenvolver o front-end.
- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Axios**: Biblioteca para fazer requisições HTTP do front-end para a API backend.

---

## Funcionalidades

- Cadastro de usuários com senha criptografada.
- Login com geração de token JWT para autenticação.
- Rotas protegidas que exigem autenticação via token.
- Validação e tratamento de erros.
- Comunicação eficiente entre front-end e back-end via Axios.

---

## Como Rodar o Projeto

### 1. Clone o repositório:
   ```bash
   git clone (https://github.com/ImDevMota/auth-user-system.git)
   cd auth-user-system
   ```

### 2. Instale as dependências (na pasta frontend e backend):
  ```bash
  cd .\backend\
  npm install
  ```

  ```bash
  cd ..\frontend\
  npm install
  ```
### 3. Instale o concurrently na raiz do projeto (se ainda não tiver)
  ```bash
  npm install concurrently --save-dev
  ```
### 4. Configure o .env no diretório backend
  Crie um arquivo .env com:
  ```bash 
  DATABASE_URL=mongodb+srv://usuario:senha@cluster.mongodb.net/seu-banco
  JWT_SECRET=sua_chave_secreta
  ```

### 5. Gere o cliente Prisma:
  ```bash
  cd .\backend\
  npx prisma generate
  cd ..
  ```

### 6. Inicie frontend e backend juntos:
  ```bash
  npm run dev
  ```

