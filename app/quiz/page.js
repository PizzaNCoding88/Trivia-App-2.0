"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./page.css";
import Logo from "../../public/assets/images/logo.png";
import { useQuiz } from "../context/QuizContext";
import { shuffleArray } from "../utils/shuffleArray";
import { decodeHtml } from "../utils/decodeHTML";

const Quiz = () => {
  const [questions] = useQuiz();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  if (!questions || questions.length === 0 || !questions[currentIndex]) {
    return <div>Loading...</div>;
  }

  if (questions && questions.length > 0) {
    let quiz = questions;
    const answers = [
      ...quiz[currentIndex].incorrect_answers,
      quiz[currentIndex].correct_answer,
    ];
    console.log(questions[currentIndex]);

    const shuffledAnswers = shuffleArray(answers);

    function handleAnswer(i) {
      if (shuffledAnswers[i] === quiz[currentIndex].correct_answer) {
        if (currentIndex + 1 >= quiz.length) {
          setIsFinished(true);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        setWrongAnswer(true);
      }
    }
    console.log(questions[currentIndex].correct_answer);
    return (
      <div className="container">
        <div className="image-container">
          <Image alt="logo" src={Logo} className="logo" />
        </div>
        <div className="central-part">
          <div className="top-section">
            <div className="question-counter">
              {currentIndex + 1}/{questions.length}
            </div>
            <div className="category-display">
              {questions[currentIndex].category}
            </div>
            <div className="timer">30s</div>
          </div>
          <div className="middle-section">
            <p>{decodeHtml(questions[currentIndex].question)}</p>
          </div>
          <div className="bottom-section">
            {shuffledAnswers.map((answer, i) => (
              <button onClick={() => handleAnswer(i)} key={i}>
                {answer}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button>Next Question</button>
          </div>
        </div>
        <div className="footer">
          App created using the Open trivia Database API
        </div>
      </div>
    );
  }
};
export default Quiz;
