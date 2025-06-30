"use client";

import React, { useContext, createContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
   const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  return (
    <QuizContext.Provider value={[questions, setQuestions, setCorrectAnswers,setWrongAnswers, correctAnswers, wrongAnswers]}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);
