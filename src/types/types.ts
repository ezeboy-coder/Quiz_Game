export interface QuestionType {
    question: string;
    choices: string[];
    correctAnswer: string;
  }
  
  export interface QuestionProps {
    question: QuestionType;
    onAnswer: (isCorrect: boolean) => void;
  }
  
  export interface ScoreProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
  }