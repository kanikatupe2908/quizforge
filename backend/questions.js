const questions = [
  {
    id: 1,
    subject: "JavaScript Basics",
    question: "Which keyword declares a constant?",
    options: ["var", "let", "const", "static"],
    answer: 2,
    explanation: "const declares a variable that cannot be reassigned.",
  },
  {
    id: 2,
    subject: "JavaScript Basics",
    question: "What does typeof null return?",
    options: ["null", "object", "undefined", "number"],
    answer: 1,
    explanation: "This is a long-standing quirk: typeof null returns 'object'.",
  },
  {
    id: 3,
    subject: "JavaScript Basics",
    question: "Which operator checks both value and type?",
    options: ["==", "=", "===", "!="],
    answer: 2,
    explanation: "=== is strict equality and does not convert types.",
  },
  {
    id: 4,
    subject: "Arrays & Functions",
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "push() adds to the end; unshift() adds to the start.",
  },
  {
    id: 5,
    subject: "Arrays & Functions",
    question: "Which method creates a new array from each item's result?",
    options: ["filter()", "map()", "forEach()", "reduce()"],
    answer: 1,
    explanation: "map() returns a new array with the callback's result for each item.",
  },
];

module.exports = questions;