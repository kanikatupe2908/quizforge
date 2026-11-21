import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const loadQuestions = () => {
    fetch("http://localhost:5000/api/questions?count=5")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setFinished(false);
      });
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  if (questions.length === 0) {
    return (
      <div className="page">
        <div className="card">Loading questions...</div>
      </div>
    );
  }

  const q = questions[current];

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === q.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="page">
        <div className="card result">
          <h1>🎉 Quiz Complete!</h1>
          <div className="score-circle">
            {score}/{questions.length}
          </div>
          <p>You scored {percent}%</p>
          <button className="btn" onClick={loadQuestions}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const optionClass = (i) => {
    if (selected === null) return "option";
    if (i === q.answer) return "option correct";
    if (i === selected) return "option wrong";
    return "option dim";
  };

  return (
    <div className="page">
      <div className="card">
        <div className="top">
          <h2 className="logo">QuizForge</h2>
          <span className="badge">{q.subject}</span>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
        <p className="counter">
          Question {current + 1} of {questions.length} · Score: {score}
        </p>

        <h3 className="question">{q.question}</h3>

        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              className={optionClass(i)}
              onClick={() => handleSelect(i)}
            >
              <span className="letter">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="explanation">
            <strong>
              {selected === q.answer ? "✅ Correct! " : "❌ Not quite. "}
            </strong>
            {q.explanation}
          </div>
        )}

        {selected !== null && (
          <button className="btn" onClick={handleNext}>
            {current + 1 === questions.length ? "See Result" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;