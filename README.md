# TodoMaster

A simple and responsive full-stack Todo Application built with React, TypeScript, CSS, Node.js, Express, and MongoDB.
This project is a **full-stack Todo Application** built with **React**, **TypeScript**, **CSS**, **Node.js**, **Express**, and **MongoDB**.
It allows users to add, complete, and delete tasks in a clean, responsive interface.
The **frontend** is developed using React with TypeScript for type safety and component-based architecture.
CSS is used for styling to ensure the UI is user-friendly and responsive.

## 🧾 Overview

Users can:
* Add new tasks
* Mark tasks as completed
* Delete individual tasks
* Delete all tasks

The **backend** is built with Node.js and Express, providing RESTful APIs to interact with the **MongoDB** database using Mongoose. 
Each task consists of a description and a completion status.
The frontend communicates with the backend using asynchronous API calls (GET, POST, PUT, DELETE). 
The project structure follows modular design, making it scalable and maintainable.
It’s a great project for learning or demonstrating **MERN stack** skills with **TypeScript** integration.

## 🚀 Features

- Add, delete, and toggle tasks
- Filter tasks (e.g., all, completed, pending)
- Delete all tasks at once
- Responsive UI with clean design
- API error handling
- Integrated with a backend using Express and MongoDB

## 🔄 Workflow
1. **User Interaction**: Users interact with the React-based frontend.
2. **API Requests**: Axios sends asynchronous requests to the backend.
3. **Backend Processing**: Express handles routes and logic.
4. **Database Storage**: Mongoose interacts with MongoDB for CRUD operations.
5. **Response Handling**: Data is sent back to the frontend for real-time updates.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Other Tools:** Axios, Postman, Git

- ## 📂 Project Structure
- /TodoMaster
│├── frontend
│ ├── components
│ ├── pages
│ ├── services
│ └── App.tsx
│
├── backend
│ ├── models
│ ├── routes
│ ├── controllers
│ └── server.js
│
└── README.md


- ## API Routes
  POST /api/todos – Add new task
  GET /api/todos – Fetch all tasks
  GET /api/todo – Fetch Particular   tasks
  PUT /api/todos/:id – Update task status
  DELETE /api/todos/:id – Delete a task


- ## Frontend Setup 
      cd frontend
      npm install
      npm run dev

  
- ## backend Setup
      cd backend
      npm install
      npm start

  

## 📸 Screenshots

### 🏠 Home Page
![Home Page](![Screenshot 2025-05-31 105529](https://github.com/user-attachments/assets/b0e972f1-e306-4815-8028-b02c615080ed))

### ➕ Adding a Task
![Add Task]([./screenshots/add-task.png](https://github.com/vemulanithish5038/MERN-stack-todo-application/commit/e530047fceff1d8ecc5d7d5f429eab8c3b84f574#commitcomment-158636627))

### ✅ Task Completed
![Completed Task]([./screenshots/completed-task.png](https://github.com/vemulanithish5038/MERN-stack-todo-application/commit/e530047fceff1d8ecc5d7d5f429eab8c3b84f574#commitcomment-158636702))


### ✅ Delete Task
![Completed Task](https://github.com/vemulanithish5038/MERN-stack-todo-application/commit/e530047fceff1d8ecc5d7d5f429eab8c3b84f574#commitcomment-158636707)
