const express = require("express");
const cors = require("cors");
const questions = require("./questions");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("QuizForge API is running");
});

app.get("/api/questions", (req, res) => {
  const { subject, count = 10 } = req.query;

  let pool = subject
    ? questions.filter((q) => q.subject === subject)
    : [...questions];

  pool.sort(() => Math.random() - 0.5);
  res.json(pool.slice(0, Number(count)));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});