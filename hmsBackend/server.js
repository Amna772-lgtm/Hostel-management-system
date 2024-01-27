const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
//const cors = require('cors');
// Use CORS middleware
app.use(cors());

// Use JSON middleware to parse incoming requests
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'root',
    database: 'sign-up'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Database connected!');
});

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE email=? AND password=?';

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.status(500).json("Error");
        if(data.length > 0){
            return res.status(200).json({message:"Login successfully", redirectTo: "/Dashboard"});
        } else {
            return res.status(401).json("No record found");
        }
        
    });
});

app.post('/signup', (req, res) => {
    const { name, email, phone, password } = req.body;

    // Check if the email already exists in the database
    const checkEmailQuery = 'SELECT * FROM login WHERE email = ?';
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(409).json({ error: 'Email already exists' });
        }

        // Insert new user into the database
        const insertUserQuery = 'INSERT INTO login (name, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(insertUserQuery, [name, email, phone, password], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to create user' });
            }
            return res.status(201).json({ message: 'User created successfully' });
        });
    });
});


app.listen(8081, () => {
    console.log('Listening on port 8081');
});
