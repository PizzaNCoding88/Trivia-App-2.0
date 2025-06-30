'use client'
import React from 'react'
import { useQuiz } from "../context/QuizContext";

const Results = () => {
 const [,,,, correctAnswers, wrongAnswers] = useQuiz();
  return (
    <div>
      <div className='text-white'>correct answers: {correctAnswers}</div>
      <div className='text-white'>wrong answers: {wrongAnswers}</div>
    </div>
  )
}

export default Results
