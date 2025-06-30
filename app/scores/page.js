'use client'
import React from 'react'
import { useQuiz } from "../context/QuizContext";
import Logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import Trophy from "../../public/assets/images/trophy.png";
import './page.css';

const Results = () => {
 const [questions,,,, correctAnswers, wrongAnswers] = useQuiz();
  return (
    <div className="container">
        <div className="image-container">
          <Image alt="logo" src={Logo} className="logo" />
        </div>
        <div className="central-part-score">
          <div className='trophy-container'>
            <Image alt="trophy" src={Trophy} className="trophy" />
          </div>
          <div className='completed'>
            <h1>Quiz Completed</h1>
          <p>Here's how you did</p>
          </div>
          <div className='score-container'>
            <div className='score'>
              <p>{correctAnswers}/{questions.length}</p>
            </div>
          </div>
        </div>
        /
      </div>
  )
}

export default Results
