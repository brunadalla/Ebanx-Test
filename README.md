# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
    - [Instalando Dependências](#21-instalando-dependências)
    - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
    - [Migrations](#23-migrations)
- [Endpoints](#3-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

A URL base da aplicação: https://phone-book-deploy.onrender.com/

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 3. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [GET - /users](#12-listando-usuários)
	  - [GET - /users/:user_id](#13-listar-usuário-por-id)
    - [PATCH - /users/:user_id](#14-atualizar-usuário-por-id)
    - [DELETE - /users/:user_id](#15-deletar-usuário-por-id)
- [Login](#2-login)
- [Contacts](#3-contacts)
    - [POST - /users](#31-criação-de-contato)
    - [GET - /users](#32-listando-contatos-do-usuário)
	  - [GET - /users/:user_id](#33-listar-contato-por-id)
    - [PATCH - /users/:user_id](#34-atualizar-contato-por-id)
    - [DELETE - /users/:user_id](#35-deletar-contato-por-id)

---

## 1. **Users**
[ Voltar para os Endpoints ](#3-endpoints)

O objeto User é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | string | Identificador único do usuário                  |
| name       | string | O nome do usuário                               |
| email      | string | O e-mail do usuário                             |
| password   | string | A senha de acesso do usuário                    |
| phone      | string | O número de telefone do usuário                 |
| createdAt  | date   | Data de criação da conta                        |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /users     | Criação de um usuário                   |
| GET      | /users     | Lista todos os usuários                 |
| GET      | /users/:user_id     | Lista um usuário usando seu ID como parâmetro |
| PATCH    | /users/:user_id     | Atualiza as informações de um usuário usando seu ID como parâmetro |
| DELETE   | /users/:user_id     | Deleta um usuário usando seu ID como parâmetro |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#3-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: 
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
    "name": "Eduardo",
    "email": "edu@mail.com",
    "phone": "5511998989898",
    "password": "1234",
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Eduardo",
    "email": "edu@mail.com",
    "phone": "5541998989898",
    "createdAt": "2023-02-01T14:24:55.580Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 Bad Request | Email already being used |

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#3-endpoints)

### `/users`

### Exemplo de Request:
```
GET /users
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
    {
        "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
        "name": "Eduardo",
        "email": "edu@mail.com",
        "phone": "5541998989898",
        "createdAt": "2023-02-01T14:24:55.580Z"
    }
]

```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |

---

### 1.3. **Listar Usuário por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/users/:user_id`

### Exemplo de Request:
```
GET /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| user_id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Eduardo",
    "email": "edu@mail.com",
    "phone": "5541998989898",
    "createdAt": "2023-02-01T14:24:55.580Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 404 Not Found    | User not found |

---

### 1.4. **Atualizar Usuário por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/users/:user_id`

### Exemplo de Request:
```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| user_id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
    "name": "Eduardo Santos",
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Eduardo Santos",
    "email": "edu@mail.com",
    "phone": "5541998989898",
    "createdAt": "2023-02-01T14:24:55.580Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 401 Unauthorized | Not the same user who is logged |
| 401 Unauthorized | Can not change the user's id and/or email |
| 404 Not Found    | User not found |

---

### 1.5. **Deletar Usuário por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/users/:user_id`

### Exemplo de Request:
```
DELETE /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| user_id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No Content
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 401 Unauthorized | Not the same user who is logged |
| 404 Not Found    | User not found |

---

## 2. **Login**
[ Voltar para os Endpoints ](#3-endpoints)

### `/login`

### Exemplo de Request:
```
POST /login
Host: 
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
    "email": "edu@mail.com",
    "password": "1234",
}
```

### Exemplo de Response:
```
200 Ok
```

```json
{
    "token": "eufghueiaydidudiddchygyegffehf..."
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 403 Forbidden  | Incorrect email or password |

---

## 3. **Contacts**
[ Voltar para os Endpoints ](#3-endpoints)

O objeto Contact é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | string | Identificador único do contato                  |
| name       | string | O nome do contato                               |
| email      | string | O e-mail do contato                             |
| phone      | string | O número de telefone do contato                 |
| createdAt  | date   | Data de criação do contato                      |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /contacts     | Criação de um contato                   |
| GET      | /contacts     | Lista todos os contatos do usuário      |
| GET      | /contacts/:contact_id     | Lista um contato usando seu ID como parâmetro |
| PATCH    | /contacts/:contact_id     | Atualiza as informações de um contato usando seu ID como parâmetro |
| DELETE   | /contacts/:contact_id     | Deleta um contato usando seu ID como parâmetro |

---

### 3.1. **Criação de Contato**

[ Voltar para os Endpoints ](#3-endpoints)

### `/contacts`

### Exemplo de Request:
```
POST /contacts
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:
```json
{
    "name": "Lucas",
    "email": "lucas@mail.com",
    "phone": "5511997979797",
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Lucas",
    "email": "lucas@mail.com",
    "phone": "5511997979797",
    "createdAt": "2023-02-01T14:24:55.580Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 Bad Request | One of your contacts already has this email |
| 400 Bad Request | One of your contacts already has this phone number |
| 401 Unauthorized | Invalid token |

---

### 3.2. **Listando Contatos do Usuário**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts`

### Exemplo de Request:
```
GET /contacts
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
    {
        "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
        "name": "Lucas",
        "email": "lucas@mail.com",
        "phone": "5511997979797",
        "createdAt": "2023-02-01T14:24:55.580Z"
    }
]

```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |

---

### 3.3. **Listar Contato por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts/:contact_id`

### Exemplo de Request:
```
GET /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| contact_id  | string      | Identificador único do contato (Contact) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Lucas",
    "email": "lucas@mail.com",
    "phone": "5511997979797",
    "createdAt": "2023-02-01T14:24:55.580Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 404 Not Found    | Contact not found |

---

### 3.4. **Atualizar Contato por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts/:contact_id`

### Exemplo de Request:
```
PATCH /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| contact_id  | string      | Identificador único do contato (Contact) |

### Corpo da Requisição:
```json
{
    "name": "Lucas Silva",
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Lucas Silva",
    "email": "lucas@mail.com",
    "phone": "5511997979797",
    "createdAt": "2023-02-01T14:24:55.580Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 404 Not Found    | Contact not found |

---

### 3.5. **Deletar Contato por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts/:contact_id`

### Exemplo de Request:
```
DELETE /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| contact_id  | string      | Identificador único do contato (Contact) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No Content
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token |
| 404 Not Found    | Contact not found |

---
