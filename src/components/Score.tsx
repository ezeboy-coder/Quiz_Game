import React from "react";
import { ScoreProps } from "../types/types";

const Score: React.FC<ScoreProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="score-container">
      <p>
        You scored {score} out of {totalQuestions}!
      </p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Score;
