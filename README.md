# API Documentation

## Table of Contents

- [Overview](#1-overview)
- [Quick Start](#2-quick-start)
    - [Installing Dependencies](#21-installing-dependencies)
    - [Environment Variables](#22-environment-variables)
    - [Migrations](#23-migrations)
    - [Running the Project Locally](#24-running-the-project-locally)
- [Endpoints](#3-endpoints)

---

## 1. Overview

General overview of the project.

### Tools used to complete the challenge:
- VSCode
- Insomnia
- pgAdmin

### Languages and technologies used:
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)

### Database used:
- [PostgreSQL](https://www.postgresql.org/)
  
---

## 3. Quick Start
[ Back to top ](#table-of-contents)


### 2.1. Installing Dependencies

Clone the project to your machine and install dependencies with:

```shell
yarn
```

### 2.2. Environment Variables

Then, create a **.env** file, copying the format from **.env.example**:
```
cp .env.example .env
```

Set your environment variables with your Postgres credentials and a new database of your choice.

### 2.3. Migrations

Run migrations with:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 2.4. Running the Project Locally

Start the project locally with:

```
yarn dev
```

---

## 3. Endpoints

[ Back to top ](#table-of-contents)

### Índice

- [Account](#1-users)
    - [Balance](#11-balance)
- [Reset](#2-reset)
- [Event](#3-event)
    - [Deposit](#31-deposit)
    - [Withdraw](#32-withdraw)
    - [Transfer](#33-transfer)

---

## 1. **Account**
[ Back to Endpoints ](#3-endpoints)

The Account object is defined as:

| Field      | Type   | Description                      |
| -----------|--------|--------------------------------- |
| id         | string | Unique account identifier        |
| balance    | number | Total balance of the account     |

---

### 1.1. **Get Balance**

[ Back to Endpoints ](#3-endpoints)

### `/balance`

### Example Request:
```
GET /balance?account_id=100
Host: 
Authorization: None
Content-type: application/json
```

### Request Parameters:
| Parameter	  | Type    | Description                         |
|-------------|---------|-------------------------------------|
| account_id  | string  | Unique account identifier (Account) |

### Request Body:
```json
Empty
```

### Example Response:
```
200 OK
```

```json
10
```

### Possible Errors:
| Error Code	   | Description            |
|----------------|----------------------- |
| 404 Not Found  | Account does not exist |


---

## 2. **Reset**
[ Back to Endpoints ](#3-endpoints)

### `/reset`

### Example Request:
```
POST /
Host: 
Authorization: None
Content-type: application/json
```

### Request Body:
```json
Empty
```

### Example Response:
```
200 OK
```

---

## 3. **Event**
[ Back to Endpoints ](#3-endpoints)

The Event object can be of type deposit, withdraw, or transfer.

---

### 3.1. **Deposit**

[ Back to Endpoints ](#3-endpoints)

### `/event`

### Example Request:
```
POST /event
Host: 
Authorization: None
Content-type: application/json
```

### Request Body:
```json
{
	"type": "deposit", 
	"destination": "100", 
	"amount": 50 
}
```

### Example Response:
```
201 Created
```

```json
{
	"destination": {
		"id": "100",
		"balance": 55
	}
}
```

If the account does not exist, it will be created with the given amount as the initial balance.

---

### 3.2. **Withdraw**

[ Back to Endpoints ](#3-endpoints)

### `/event`

### Example Request:
```
POST /event
Host: 
Authorization: None
Content-type: application/json
```

### Request Body:
```json
{ 
	"type": "withdraw", 
	"origin": "100", 
	"amount": 10
}
```

### Example Response:
```
201 Created
```
```json
{
	"origin": {
		"id": "100",
		"balance": 45
	}
}

```
### Possible Errors:
| Error Code	   | Description            | Response |
| ---------------| ---------------------- | -------- |
| 404 Not Found  | Account does not exist | 0        |

---

### 3.3. **Transfer**

[ Back to Endpoints ](#3-endpoints)

### `/event`

### Example Request:
```
POST /event
Host: 
Authorization: None
Content-type: application/json
```

### Request Body:

```json
{ 
	"type": "transfer", 
	"origin": "100",
	"amount": 15,
	"destination": "300"
}

```

### Example Response:
```
200 OK
```
```json
{
	"origin": {
		"id": "100",
		"balance": 30
	},
	"destination": {
		"id": "300",
		"balance": 25
	}
}
```

### Possible Errors:
| Error Code	   | Description                   | Response |
| ---------------| ------------------------------| -------- |
| 404 Not Found  | Origin Account does not exist | 0        |


---
