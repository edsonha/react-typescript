import React from "react";

import QuestionCard from "./components/QuestionCard";

const App = () => {
  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={() => console.log("Start")}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={() => console.log("Next Q")}>
        Next Question
      </button>
    </div>
  );
};

export default App;
