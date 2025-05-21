
# 📝 MERN Stack Blogging App

Welcome to the MERN Stack Blogging App! This is a simple full-stack blog platform built with:

- **MongoDB** (via Compass for local development)
- **Express.js**
- **GraphQL (Apollo Server & Client)**
- **Next.js (React Framework)**
- **Tailwind CSS**


---

## 🚀 Features

- 🔹 View all blog posts
- 🔹 Read full content of a single post
- 🔹 Create new blog posts via form
- 🔹 Responsive and modern UI with Tailwind CSS
- 🔹 Full local setup using MongoDB Compass

---

## 🗂️ Folder Structure

```

mern-blog-task/
├── backend/        # Node.js + Apollo Server + MongoDB
├── frontend/       # Next.js + Apollo Client + Tailwind

````

---

## 🧰 Technologies Used

- Node.js
- Express.js
- Apollo Server (GraphQL)
- MongoDB (with Compass for local)
- Next.js (React)
- Apollo Client
- Tailwind CSS

---

## ⚙️ Local Setup Instructions

### 📦 Backend Setup

1. Open terminal in `backend/` folder:

```bash
npm install
node index.js
````

2. Make sure **MongoDB Compass** is running locally.

   * Default URI used: `mongodb://localhost:27017`
   * Database: `blogdb`, Collection: `posts` (auto-created)

### 🌐 Frontend Setup

1. Open terminal in `frontend/` folder:

```bash
npm install
npm run dev
```

2. Open browser at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 GraphQL Playground (for testing)

Open: [http://localhost:4000/graphql](http://localhost:4000/graphql)

Example Query:

```graphql
query {
  getPosts {
    _id
    title
    author
  }
}
```

Example Mutation:

```graphql
mutation {
  createPost(title: "Test", content: "This is a test post.", author: "Admin") {
    _id
    title
  }
}
```

---

## ✨ Screenshots

| Homepage                          | Create Post                            |
| --------------------------------- | -------------------------------------- |
| ![image](https://github.com/user-attachments/assets/85a2c08f-9ce4-45b0-b99d-535489f7d460)
 | ![image](https://github.com/user-attachments/assets/38788cb7-6663-44e9-a9b3-321d409a23dc)


---

## 📌 Author

**Khurram Rashid**
B.Tech CSE | MERN Stack Developer | AI Enthusiast

---

