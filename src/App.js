import React from 'react';
import useLogic from "./useLogic";

const App = () => {

  const {text, inputEl, handleInput, timerOn, timeLeft, startGame, activeGame, length} = useLogic();

  return (
    <div className="game-window">
      <h1 className="title">TYPE YOUR LITTLE HEART OUT</h1>
      <textarea
        value={text}
        ref={inputEl}
        onChange={handleInput}
        disabled={!timerOn}
      />
      <h4 className="info">Time remaining: {timeLeft}</h4>
      <button onClick={startGame} disabled={activeGame}>START</button>
      <h2>{timeLeft === 0 && `Words per minute: ${Math.floor(length * 3)}`}</h2>
    </div>
  )
}

export default App
