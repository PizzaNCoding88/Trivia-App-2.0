"use client";
import React, { useState, useMemo } from "react";
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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [disableButtons, setDisableButtons] = useState(false);

  const shuffledAnswers = useMemo(() => {
    if (!questions || !questions[currentIndex]) return [];
    const answers = [
      ...questions[currentIndex].incorrect_answers,
      questions[currentIndex].correct_answer,
    ];
    return shuffleArray(answers);
  }, [questions, currentIndex]);

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

    function handleAnswer(i) {
      setDisableButtons(true);
      setSelectedAnswer(i);
      if (shuffledAnswers[i] === quiz[currentIndex].correct_answer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }

    function handleNext() {
      setDisableButtons(!disableButtons);
      if (currentIndex + 1 >= quiz.length) {
        setIsFinished(true);
      } else {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
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
              <button
                disabled={disableButtons !== false}
                onClick={() => handleAnswer(i)}
                key={i}
                style={
                  selectedAnswer === i
                    ? isCorrect
                      ? { backgroundColor: "green", color: "white" }
                      : { backgroundColor: "red", color: "white" }
                    : {}
                }
              >
                {decodeHtml(answer)}
              </button>
            ))}
          </div>
          <div className="button-container">
            {selectedAnswer != null && (
              <button onClick={() => handleNext()}>
                {currentIndex + 1 >= quiz.length ? "Finish" : "Next Question"}
              </button>
            )}
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
