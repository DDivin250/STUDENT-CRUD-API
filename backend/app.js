const express = require('express');
const db = require('./config/db');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());

app.use(express.json());




// CREATE (Add student)
app.post('/students', (req, res) => {
    const { name, email, age } = req.body;

    const sql = 'INSERT INTO students (name, email, age) VALUES (?, ?, ?)';
    db.query(sql, [name, email, age], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Student added successfully', result });
    });
});


// READ (Get all students)
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});


// READ ONE (Get single student)
app.get('/students/:id', (req, res) => {
    const sql = 'SELECT * FROM students WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});


// UPDATE
app.put('/students/:id', (req, res) => {
    const { name, email, age } = req.body;

    const sql = 'UPDATE students SET name=?, email=?, age=? WHERE id=?';
    db.query(sql, [name, email, age, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Student updated', result });
    });
});


// DELETE
app.delete('/students/:id', (req, res) => {
    const sql = 'DELETE FROM students WHERE id=?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Student deleted', result });
    });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});