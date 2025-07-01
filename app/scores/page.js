'use client'
import React from 'react'
import { useQuiz } from "../context/QuizContext";
import Logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import Trophy from "../../public/assets/images/trophy.png";
import './page.css';
import Buttons from '@/components/buttons/Buttons';
import { useRouter } from 'next/navigation';

const Results = () => {
  const router = useRouter();
 const [questions,,,, correctAnswers, wrongAnswers, questionsTimes, setQuestionsTimes] = useQuiz();
 const totalTime = questionsTimes.reduce((acc, time) => acc + time, 0);
 const playAgain = () => {router.push('/')}
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
          <p>Here&apos;s how you did</p>
          </div>
          <div className='score-container'>
            <div className='score'>
              <p>{correctAnswers}/{questions.length}</p>
            </div>
          </div>
          <div className='stats-container'>
            <div className='correct-answers'>
              <p>Correct</p>
              <p>{correctAnswers}</p>
            </div>
            <div className='wrong-answers'>
              <p>Incorrect</p>
              <p>{wrongAnswers}</p>
            </div>
            <div className='total-time'>
              <p>Time</p>
              <p>{totalTime}s</p>
            </div>
            <div className='accuracy'>
              <p>Accuracy</p>
              <p>{((correctAnswers/questions.length)*100).toFixed(1)}%</p>
            </div>            
          </div>
          <div className='button-container'>
            <Buttons name={'Play again'} click={playAgain} />
          </div>
        </div>
        
      </div>
  )
}

export default Results
