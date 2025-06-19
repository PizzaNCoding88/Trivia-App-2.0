"use client";
import React from "react";
import Image from "next/image";
import "./page.css";
import Logo from "../../public/assets/images/logo.png";
import { useQuiz } from "../context/QuizContext";

const Quiz = () => {
  const [questions] = useQuiz();
  console.log(questions);
  return (
    <div className="container">
      <div className="image-container">
        <Image alt="logo" src={Logo} className="logo" />
      </div>
      <div className="central-part">
        <div className="top-section">
          <div className="question-counter">1/5</div>
          <div className="category-display">Film</div>
          <div className="timer">30s</div>
        </div>
        <div className="middle-section"></div>
        <div className="bottom-section"></div>
        <div className="button-container">
          <button>start</button>
        </div>
      </div>
      <div className="footer">
        App created using the Open trivia Database API
      </div>
    </div>
  );
};

export default Quiz;
