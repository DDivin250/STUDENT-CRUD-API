# Student Management System (Fullstack)

This is a simple fullstack CRUD application built using **Node.js, Express, MySQL, and React**.
It allows users to create, view, update, and delete student records.

---

## 📌 Features

* Add new students
* View all students
* Edit student details
* Delete students
* Simple and clean user interface

---

## 🛠️ Tech Stack

**Backend**

* Node.js
* Express
* MySQL

**Frontend**

* React (Vite)
* CSS

---

## 📁 Project Structure

```
student-crud-api/
│
├── config/
│   └── db.js
├── app.js
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/DDivin250/STUDENT-CRUD-API.git
cd STUDENT-CRUD-API
```

---

### 2. Backend Setup

```
npm install
node app.js
```

Make sure MySQL is running and update your database credentials in:

```
config/db.js
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

* GET `/students` → Get all students
* GET `/students/:id` → Get single student
* POST `/students` → Add student
* PUT `/students/:id` → Update student
* DELETE `/students/:id` → Delete student

---

## 💡 Notes

* Backend runs on `http://localhost:4000`
* CORS is enabled for frontend communication
* Uses parameterized queries for security

---

## 🚀 Future Improvements

* Add authentication (login/register)
* Improve UI design
* Add search and filtering
* Deploy backend and frontend

---

## 👨‍💻 Author

Duc Divin
