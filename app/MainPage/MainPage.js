"use client";
import React from "react";
import "./MainPage.css";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Buttons from "@/components/buttons/Buttons";
import { categories } from "@/public/assets/categories/categories";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "../context/QuizContext";

const MainPage = () => {
  const router = useRouter();
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedDifficulty, setSelectedDifficulty] = useState();
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [, setQuestions] = useQuiz();

  function increaseQuestions() {
    if (questionsNumber >= 0 && questionsNumber < 50) {
      setQuestionsNumber(questionsNumber + 1);
    }
  }

  function decreaseQuestions() {
    if (questionsNumber > 0) {
      setQuestionsNumber(questionsNumber - 1);
    }
  }

  async function startGame(questionsNumber, category, difficulty) {
    if (!questionsNumber || !category || !difficulty) {
      setQuestionsNumber(true);
    } else {
      const url = `https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}&difficulty=${difficulty}&type=multiple`;
      // console.log(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setQuestions(json.results);
        router.push("/quiz");
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  return (
    <div className="container">
      <div className="image-container">
        <Image alt="logo" src={Logo} className="logo" />
      </div>
      <div className="central-part">
        <div>
          <h1>Ready for a challenge?</h1>
        </div>
        <div>
          <p>Select your preferred category and difficulty level to begin</p>
        </div>
        <div className="category-container">
          <p>Select Category</p>
          <div className="category-selector">
            {categories.map((category, index) => (
              <Buttons
                key={index}
                name={category.name}
                textSize="xs"
                start={category.base}
                finish={category.dark}
                selected={selectedCategory === index}
                click={() => {
                  setSelectedCategory(index);
                  setCategory(category.id);
                }}
              ></Buttons>
            ))}
          </div>
        </div>
        <div className="difficulty-container">
          <p>Difficulty Level</p>
          <div className="difficulty-selector">
            <button
              className={`easy transition-all duration-100 ${
                selectedDifficulty === "easy"
                  ? "border-2 border-white"
                  : " border-0 border-transparent"
              }`}
              onClick={() => {
                setSelectedDifficulty("easy");
                setDifficulty("easy");
              }}
            >
              Easy
            </button>
            <button
              className={`medium transition-all duration-100 ${
                selectedDifficulty === "medium"
                  ? "border-2 border-white"
                  : " border-0 border-transparent"
              }`}
              onClick={() => {
                setSelectedDifficulty("medium");
                setDifficulty("medium");
              }}
            >
              Medium
            </button>
            <button
              className={`hard transition-all duration-100 ${
                selectedDifficulty === "hard"
                  ? "border-2 border-white"
                  : " border-0 border-transparent"
              }`}
              onClick={() => {
                setSelectedDifficulty("hard");
                setDifficulty("hard");
              }}
            >
              Hard
            </button>
          </div>
        </div>
        <div className="questions-container">
          <p>
            Number of questions <span>(Max. 50)</span>
          </p>
          <div className="questions-selector">
            <button
              className="lateral-buttons minus"
              onClick={decreaseQuestions}
            >
              -
            </button>
            <div className="questions">{questionsNumber}</div>
            <button
              className="lateral-buttons plus"
              onClick={increaseQuestions}
            >
              +
            </button>
          </div>
        </div>
        <div className="start-button-container">
          <Buttons
            name="Start"
            start="#3cb44b"
            finish="#1b7627"
            textSize="sm"
            padding="3"
            click={() => startGame(questionsNumber, category, difficulty)}
          />
        </div>
      </div>
      <div className="footer">
        App created using the Open trivia Database API
      </div>
    </div>
  );
};

export default MainPage;
