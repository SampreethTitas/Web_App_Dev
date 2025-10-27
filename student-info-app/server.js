// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let students = [];

// Serve the main form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// CREATE - Add new student
app.post('/submit', (req, res) => {
  const { name, branch, semester } = req.body;
  students.push({ name, branch, semester });
  res.redirect('/students');
});

// READ - Display all students with Update/Delete
app.get('/students', (req, res) => {
  let html = `
    <h2>Student List</h2>
    <ul>
  `;

  students.forEach((s, i) => {
    html += `
      <li>
        <b>${s.name}</b> — <u>${s.branch}</u> — Semester: ${s.semester}
        <a href="/edit/${i}">Edit</a>
        <a href="/delete/${i}">Delete</a>
      </li>
    `;
  });

  html += `
    </ul>
    <a href="/">Go back to form</a>
  `;

  res.send(html);
});

// UPDATE (via query params)
app.get('/edit/:index', (req, res) => {
  const idx = req.params.index;
  const student = students[idx];
  if (!student) return res.send('Student not found');

  res.send(`
    <h3>Edit Student</h3>
    <form action="/update/${idx}" method="POST">
      <label>Name:</label>
      <input type="text" name="name" value="${student.name}"><br>
      <label>Branch:</label>
      <input type="text" name="branch" value="${student.branch}"><br>
      <label>Semester:</label>
      <input type="number" name="semester" value="${student.semester}"><br>
      <button type="submit">Update</button>
    </form>
  `);
});

app.post('/update/:index', (req, res) => {
  const idx = req.params.index;
  const { name, branch, semester } = req.body;
  if (students[idx]) {
    students[idx] = { name, branch, semester };
  }
  res.redirect('/students');
});

// DELETE
app.get('/delete/:index', (req, res) => {
  const idx = req.params.index;
  if (students[idx]) students.splice(idx, 1);
  res.redirect('/students');
});

app.listen(PORT, () => {
  console.log(`✅ Simple server running at http://localhost:${PORT}`);
});
