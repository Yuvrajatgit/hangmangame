import React, { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import './App.css'

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );


  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter=> guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) 
      || isLoser
      || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );


  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

       if (key !== 'Enter') return;
      
       e.preventDefault();
      setGuessedLetters([]); 
      setWordToGuess(getWord());

    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      className="mainDiv"
    >
      { !isLoser && !isWinner && (<h1 className="heading">Guess the correct word !</h1>)}
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
      {isLoser && "You couldn't save the man :( -  Refresh to play again !"}
      {isWinner && "Well Done, the man wasn't hanged - Refresh to play again !"}
      </div>
      <Drawing numberOfGuesses={incorrectLetters.length} />
      <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} reveal = {isLoser}/>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetters}
          disabled = {isLoser || isWinner}
        />
      </div>
    </div>
  );
}

export default App;
