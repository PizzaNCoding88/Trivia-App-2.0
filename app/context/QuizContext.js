"use client";

import React, { useContext, createContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  console.log(questions);
  return (
    <QuizContext.Provider value={[questions, setQuestions]}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);
