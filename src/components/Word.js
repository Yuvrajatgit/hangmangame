import React from "react";
import './Word.css'

const Word = ({ wordToGuess, guessedLetters, reveal = false }) => {
  return (
    <div
      className="word"
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
                  color : !guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Word;
