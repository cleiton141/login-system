Este é um projeto completo de sistema de login com cadastro e autenticação, desenvolvido com Node.js, Express, SQLite e JavaScript puro no frontend.

O sistema permite que usuários se registrem, tenham suas senhas criptografadas e realizem login com validação segura.

## tecnologias utilizadas

Node.js
Express
SQLite
Bcrypt (criptografia de senha)
HTML5
CSS3
JavaScript (Vanilla)

## sstrutura do projeto

login-system/
│
├── backend/
│   ├── server.js
│   ├── database.js
│   └── users.db
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── style.css
│   └── script.js
│
├── package.json
└── README.md
```

---

## funcionalidades

Cadastro de usuários
Login com validação
Senhas criptografadas com bcrypt
Banco de dados local (SQLite)
Interface simples e funcional


## como funciona

### cadastro

O usuário informa email e senha.
A senha é criptografada usando bcrypt antes de ser salva no banco.

### login

O sistema:

1. Busca o usuário pelo email
2. Compara a senha digitada com a senha criptografada
3. Retorna sucesso ou erro

## como executar o projeto

### clone o repositório


git clone https://github.com/seu-usuario/login-system.git


### 2. Abra no VS Code

abra a pasta do projeto no VS Code.



### instale as dependências

abra o terminal e execute:


npm install


### inicie o servidor

node backend/server.js


o servidor estará rodando em:

http://localhost:3000


### abra o frontend

abra o arquivo:
frontend/index.html


## segurança

* Senhas são criptografadas com bcrypt
* Usuários não podem ser duplicados (email único)
* Validação de login no backend


## demonstração

Você pode testar:

1. Criar uma conta
2. Fazer login com os dados cadastrados


## melhorias futuras

01 - Autenticação com JWT
02 - Interface moderna (React ou Vue)
03 - Dashboard do usuário
04 - Deploy online (Render, Vercel)
05 - Validação avançada de formulários


## objetivo do SISTEMA

Este projeto foi desenvolvido para:

* Praticar autenticação
* Trabalhar com backend e banco de dados
* Criar um projeto completo para portfólio


## autor

Desenvolvido por você 🚀
Cleiton Oliveira

Este projeto está sob a licença MIT.
