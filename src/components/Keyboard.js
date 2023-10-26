import React from "react";
import "./Keyboard.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetters, disabled = false }) => {
  return (
    <div
      className='main'
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetters(key)}
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            disabled={isActive || isInactive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
