import React from "react";
import "./MainPage.css";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Buttons from "@/components/buttons/Buttons";
import { categories } from "@/public/assets/categories/categories";

const MainPage = () => {
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
              <Buttons key={index} name={category.name} textSize="sm"></Buttons>
            ))}
          </div>
        </div>
        <div className="difficulty-container">
          <p>Difficulty Level</p>
          <div className="difficulty-selector"></div>
        </div>
        <div className="questions-container">
          <p>Number of questions</p>
          <div className="questions-selector">
            <button className="lateral-buttons plus">+</button>
            <div>Questions</div>
            <button className="lateral-buttons minus">-</button>
          </div>
        </div>
        <div className="start-button-container">
          <Buttons name="start" />
        </div>
      </div>
      <div className="footer">
        App created using the Open trivia Database API
      </div>
    </div>
  );
};

export default MainPage;
