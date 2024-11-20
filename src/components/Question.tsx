import React, { useState, useEffect } from "react";
import { QuestionProps } from "../types/types";

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  // Reset the selected choice whenever the question changes
  useEffect(() => {
    setSelectedChoice(null);
  }, [question]);

  const handleSubmit = () => {
    if (selectedChoice !== null) {
      const isCorrect = selectedChoice === question.correctAnswer;
      onAnswer(isCorrect);
    }
  };

  return (
    <div className="question-container">
      <p className="question">{question.question}</p>
      <ul className="choices">
        {question.choices.map((choice, index) => (
          <li key={index}>
            <button
              className={`choice-button ${
                selectedChoice === choice ? "selected" : ""
              }`}
              onClick={() => setSelectedChoice(choice)}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedChoice}>
        Submit Answer
      </button>
    </div>
  );
};

export default Question;
