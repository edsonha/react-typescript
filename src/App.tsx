import React, { useState } from "react";

import QuestionCard from "./components/QuestionCard";

import { fetchQuizQuestions } from "./API";
import { Difficulty, QuestionState } from "./API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={() => console.log("Start")}>
        Start
      </button>
      <p className="score">Score: </p>
      <hr />
      <button></button>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={() => console.log("Next Q")}>
        Next Question
      </button>
    </div>
  );
};

export default App;
