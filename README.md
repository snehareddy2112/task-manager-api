
```markdown
# 🚀 Task Manager API

A production-ready RESTful API built with Node.js, Express.js, and MongoDB that supports user authentication and task management with secure access control.

---

## 📌 Features

- 🔐 JWT Authentication (Register & Login)
- 🧑‍💻 User-based Task Management
- 🔒 Protected Routes with Authorization
- 📄 Pagination Support
- ⚙️ MVC Architecture
- 🚨 Global Error Handling
- 📘 Swagger API Documentation
- 🔑 Password Hashing using bcrypt

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- Swagger (swagger-ui-express, swagger-jsdoc)

---

## 📂 Project Structure

```

task-manager-api/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
├── validations/
│
├── app.js
├── server.js
├── .env

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd task-manager-api
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 📘 API Documentation (Swagger)

Open:

```
http://localhost:5000/api-docs
```

---

## 🔐 Authentication Flow (IMPORTANT)

1. Register a user → `/api/auth/register`
2. Login → `/api/auth/login`
3. Copy the JWT token from response
4. Click **Authorize 🔐** in Swagger
5. Enter:

```
Bearer <your_token>
```

6. Now you can access protected routes

---

## 📌 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

---

### 📌 Task Routes (Protected)

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/api/tasks`     | Create task                |
| GET    | `/api/tasks`     | Get all tasks (pagination) |
| GET    | `/api/tasks/:id` | Get single task            |
| PUT    | `/api/tasks/:id` | Update task                |
| DELETE | `/api/tasks/:id` | Delete task                |

---

## 🔐 Security Features

* Passwords hashed using bcrypt
* JWT-based authentication
* Protected routes using middleware
* User-specific data isolation (ownership check)

---

## 🧪 Example Request

### Create Task

```json
{
  "title": "Learn Backend",
  "description": "Build task API"
}
```

---

## 🚨 Error Handling

All responses follow a consistent format:

```json
{
  "status": "error",
  "message": "Error message"
}
```

---

## 🎯 Key Highlights

* Clean and scalable MVC architecture
* Industry-standard authentication system
* Secure and production-ready backend
* Fully documented APIs with Swagger


## ⭐ Final Note

This project demonstrates backend development best practices including authentication, authorization, error handling, and API documentation.

```
