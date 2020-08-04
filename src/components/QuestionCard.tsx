import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => <div>Question Card</div>;

export default QuestionCard;
