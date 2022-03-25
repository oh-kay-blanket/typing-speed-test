import React from 'react';
import useLogic from "./useLogic";

const App = () => {

  const {text, inputEl, handleInput, timerOn, timeLeft, startGame, activeGame, length} = useLogic();

  return (
    <div className="game-window">
      <h1 className="title">type your little heart out</h1>
      <p>a typing speed calculator.</p>
      <textarea
        value={text}
        ref={inputEl}
        onChange={handleInput}
        disabled={!timerOn}
        />
      <div>
        {timeLeft === 0 && <h4>{Math.floor(length * 3)} words per minute</h4>}
        {activeGame && timerOn && <h2 className="clock">{timeLeft}</h2>}
        {!activeGame && timeLeft !== 0 &&
          <div>
            <p>click "start" and then get your fingers ready to type</p>
            <button onClick={startGame} disabled={activeGame}>start</button>
          </div>
        }
        {!activeGame && timeLeft === 0 && <button onClick={startGame} disabled={activeGame}>go again</button>}
      </div>
    </div>
  )
}

export default App
