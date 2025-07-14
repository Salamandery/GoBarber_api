# 🚀 GoBarber API

<div align="center">

![GoBarber](https://img.shields.io/badge/GoBarber-API-orange?style=for-the-badge&logo=node.js)
![Node.js](https://img.shields.io/badge/Node.js-14+-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.17.1-blue?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=for-the-badge&logo=postgresql)
![Redis](https://img.shields.io/badge/Redis-6+-red?style=for-the-badge&logo=redis)

> 💈 **API RESTful para sistema de agendamento de serviços (GoBarber)**
> ✨ Autenticação JWT • Filas de processamento • Envio de emails • Upload de arquivos

[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Salamandery/-meetapp_api?style=social)](https://github.com/Salamandery/-meetapp_api/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Salamandery/-meetapp_api?style=social)](https://github.com/Salamandery/-meetapp_api/network)

</div>

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗 Arquitetura e Padrões](#-arquitetura-e-padrões)
- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [🚀 Instalação e Configuração](#-instalação-e-configuração)
- [🔧 Variáveis de Ambiente](#-variáveis-de-ambiente)
- [📜 Comandos Disponíveis](#-comandos-disponíveis)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔌 API Endpoints](#-api-endpoints)
- [🤝 Contribuição](#-contribuição)

---

## 🎯 Sobre o Projeto

<div align="center">

![GoBarber Demo](https://via.placeholder.com/800x400/2d3748/ffffff?text=GoBarber+API+Demo)

</div>

**GoBarber API** é um backend robusto e escalável para sistema de agendamento de serviços, desenvolvido com as melhores práticas de desenvolvimento Node.js. O projeto implementa funcionalidades avançadas como autenticação JWT, processamento de filas, envio de emails automatizados e upload de arquivos.

### ✨ Funcionalidades Principais

| Funcionalidade | Descrição | Status |
|----------------|-----------|--------|
| 🔐 **Autenticação JWT** | Sistema seguro de login/logout com tokens | ✅ |
| 👥 **CRUD de Usuários** | Gerenciamento completo de usuários | ✅ |
| 📅 **Agendamento de Serviços** | Criação e gerenciamento de eventos | ✅ |
| 📧 **Sistema de Notificações** | Emails automáticos via filas | ✅ |
| 📁 **Upload de Arquivos** | Gerenciamento de uploads com Multer | ✅ |
| ✅ **Validação de Dados** | Schema validation com Yup | ✅ |
| ⚡ **Processamento Assíncrono** | Filas com Bee-Queue e Redis | ✅ |

---

## 🛠 Tecnologias Utilizadas

### 🎯 **Core**
<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-14+-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.17.1-blue?style=flat-square&logo=express)
![Sucrase](https://img.shields.io/badge/Sucrase-3.10.1-yellow?style=flat-square)

</div>

### 🗄️ **Banco de Dados**
<div align="center">

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=flat-square&logo=postgresql)
![Sequelize](https://img.shields.io/badge/Sequelize-5.19.2-orange?style=flat-square)
![Redis](https://img.shields.io/badge/Redis-6+-red?style=flat-square&logo=redis)

</div>

### 🔐 **Autenticação & Segurança**
<div align="center">

![JWT](https://img.shields.io/badge/JWT-Authentication-yellow?style=flat-square&logo=jsonwebtoken)
![bcryptjs](https://img.shields.io/badge/bcryptjs-2.4.3-green?style=flat-square)
![Yup](https://img.shields.io/badge/Yup-0.27.0-blue?style=flat-square)

</div>

### ⚡ **Processamento & Comunicação**
<div align="center">

![Bee-Queue](https://img.shields.io/badge/Bee--Queue-1.2.2-purple?style=flat-square)
![Nodemailer](https://img.shields.io/badge/Nodemailer-6.3.0-blue?style=flat-square)
![Handlebars](https://img.shields.io/badge/Handlebars-3.1.0-orange?style=flat-square)

</div>

### 📁 **Upload & Utilitários**
<div align="center">

![Multer](https://img.shields.io/badge/Multer-1.4.2-green?style=flat-square)
![date-fns](https://img.shields.io/badge/date--fns-2.0.0-blue?style=flat-square)
![dotenv](https://img.shields.io/badge/dotenv-8.1.0-green?style=flat-square)

</div>

### 🛠️ **Desenvolvimento**
<div align="center">

![ESLint](https://img.shields.io/badge/ESLint-6.5.1-red?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-1.18.2-pink?style=flat-square&logo=prettier)
![Nodemon](https://img.shields.io/badge/Nodemon-1.19.3-green?style=flat-square)

</div>

---

## 🏗 Arquitetura e Padrões

### 🎨 **Padrões Utilizados**

| Padrão | Descrição | Implementação |
|--------|-----------|---------------|
| **MVC** | Separação de responsabilidades | Controllers, Models, Views |
| **Repository** | Abstração de acesso a dados | Sequelize ORM |
| **Middleware** | Interceptação de requisições | Express Middleware |
| **Queue** | Processamento assíncrono | Bee-Queue + Redis |
| **JWT Auth** | Autenticação stateless | jsonwebtoken |

### 📂 **Estrutura de Pastas**

```
📦 GoBarber_api
├── 🚀 server.js                 # Entry point do servidor
├── ⚡ queue.js                  # Entry point das filas
├── 📁 src/
│   ├── 🎮 app/
│   │   ├── 📋 controllers/      # Controladores da aplicação
│   │   ├── 🔧 middlewares/     # Middlewares customizados
│   │   ├── 🗃️ models/          # Modelos Sequelize
│   │   ├── ✅ schema/           # Schemas de validação
│   │   └── 📧 views/            # Templates de email
│   ├── ⚙️ config/              # Configurações da aplicação
│   ├── 🗄️ database/            # Migrations e Seeds
│   ├── 🔄 jobs/                 # Jobs das filas
│   └── 📚 lib/                  # Bibliotecas auxiliares
└── 📄 package.json
```

---

## ⚙️ Pré-requisitos

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-14+-green?style=for-the-badge&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue?style=for-the-badge&logo=postgresql)
![Redis](https://img.shields.io/badge/Redis-6+-red?style=for-the-badge&logo=redis)
![npm](https://img.shields.io/badge/npm-6+-orange?style=for-the-badge&logo=npm)

</div>

- **Node.js** 14+
- **PostgreSQL** 12+
- **Redis** 6+
- **npm** ou **yarn**

---

## 🚀 Instalação e Configuração

### 📋 **Passo a Passo**

<details>
<summary>🔍 <b>1. Clone o repositório</b></summary>

```bash
git clone https://github.com/Salamandery/-meetapp_api.git
cd GoBarber_api
```

</details>

<details>
<summary>📦 <b>2. Instale as dependências</b></summary>

```bash
npm install
```

</details>

<details>
<summary>⚙️ <b>3. Configure as variáveis de ambiente</b></summary>

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

</details>

<details>
<summary>🗄️ <b>4. Configure o banco de dados</b></summary>

```bash
# Execute as migrations
npx sequelize db:migrate

# Execute os seeds (opcional)
npx sequelize db:seed:all
```

</details>

<details>
<summary>🚀 <b>5. Inicie os serviços</b></summary>

**Terminal 1 - Servidor Principal:**
```bash
npm run dev
```

**Terminal 2 - Processamento de Filas:**
```bash
npm run queue
```

</details>

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# 🌐 Servidor
PORTA=3333
NODE_ENV=development

# 🗄️ Banco de Dados
DB_HOST=localhost
DB_USER=postgres
DB_PASS=sua_senha
DB_NAME=gobarber
DB_PORT=5432

# 🔴 Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# 🔐 JWT
JWT_SECRET=sua_chave_secreta_jwt

# 📧 Email
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=seu_usuario
MAIL_PASS=sua_senha

# 📁 Upload
STORAGE_TYPE=local
```

---

## 📜 Comandos Disponíveis

### 🚀 **Desenvolvimento**
```bash
npm run dev          # 🟢 Inicia o servidor com nodemon
npm run queue        # ⚡ Inicia o processamento de filas
```

### 🗄️ **Banco de Dados**
```bash
npx sequelize db:migrate     # 📊 Executa migrations
npx sequelize db:seed:all    # 🌱 Executa todos os seeds
npx sequelize db:seed:undo   # ↩️ Reverte seeds
```

### 🛠️ **Linting e Formatação**
```bash
npm run lint         # 🔍 Executa ESLint
npm run format       # ✨ Formata código com Prettier
```

---

## 📁 Estrutura do Projeto

```
📦 GoBarber_api
├── 🚀 server.js                # Entry point do servidor
├── ⚡ queue.js                 # Entry point das filas
├── 📁 src/
│   ├── 🎮 app/
│   │   ├── 📋 controllers/     # Controladores da aplicação
│   │   │   ├── 👤 UserController.js
│   │   │   ├── 🔐 SessionController.js
│   │   │   ├── 📅 EventController.js
│   │   │   ├── 📋 ScheduleController.js
│   │   │   ├── 👨‍💼 ProviderController.js
│   │   │   ├── 📧 NotificationController.js
│   │   │   └── 📁 FileController.js
│   │   ├── 🔧 middlewares/     # Middlewares customizados
│   │   ├── 🗃️ models/          # Modelos Sequelize
│   │   │   ├── 👤 Users.js
│   │   │   ├── 📅 Events.js
│   │   │   └── 📁 Files.js
│   │   ├── ✅ schema/          # Schemas de validação
│   │   └── 📧 views/           # Templates de email
│   ├── ⚙️ config/              # Configurações
│   ├── 🗄️ database/            # Migrations e Seeds
│   ├── 🔄 jobs/                # Jobs das filas
│   └── 📚 lib/                 # Bibliotecas auxiliares
├── 📄 package.json
├── ⚙️ nodemon.json
├── 🔧 .eslintrc.js
├── ✨ .prettierrc
└── 📋 .sequelizerc
```

---

## 🔌 API Endpoints

### 🔐 **Autenticação**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/sessions` | Login de usuário |
| `POST` | `/users` | Cadastro de usuário |

### 👥 **Usuários**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/users` | Lista usuários |
| `PUT` | `/users` | Atualiza usuário |
| `GET` | `/providers` | Lista prestadores de serviço |

### 📅 **Eventos/Agendamentos**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/events` | Lista eventos |
| `POST` | `/events` | Cria evento |
| `PUT` | `/events/:id` | Atualiza evento |
| `DELETE` | `/events/:id` | Remove evento |

### 📁 **Arquivos**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/files` | Upload de arquivo |

### 📧 **Notificações**
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/notifications` | Lista notificações |
| `PUT` | `/notifications/:id` | Marca notificação como lida |

---

## 🤝 Contribuição

<div align="center">

![Contribuição](https://img.shields.io/badge/Contribuição-Bem--vinda!-green?style=for-the-badge)

</div>

1. 🍴 **Fork** o projeto
2. 🌿 **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** para a branch (`git push origin feature/AmazingFeature`)
5. 🔄 **Abra um Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>


