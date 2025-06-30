'use client'
import React from 'react'
import { useQuiz } from "../context/QuizContext";

const results = () => {
 const [questions, setQuestions, setCorrectAnswers,setWrongAnswers, correctAnswers, wrongAnswers] = useQuiz();
  return (
    <div>
      <div className='text-white'>correct answers: {correctAnswers}</div>
      <div className='text-white'>wrong answers: {wrongAnswers}</div>
    </div>
  )
}

export default results
