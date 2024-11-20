import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Score from "./components/Score";
import { QuestionType } from "./types/types";
import "./index.css";

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizOver(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsQuizOver(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Game</h1>
      {questions.length > 0 ? (
        isQuizOver ? (
          <Score
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
          />
        ) : (
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default App;
