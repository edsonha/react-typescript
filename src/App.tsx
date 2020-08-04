import React, { useState } from "react";

import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={() => console.log("Start")}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={() => console.log("Next Q")}>
        Next Question
      </button>
    </div>
  );
};

export default App;
