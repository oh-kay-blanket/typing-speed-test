import { useState, useEffect, useRef } from 'react';

const useLogic = () => {
  const STARTING_TIME = 20

  const [text, setText] = useState('')
  const [length, setLength] = useState(0)

  const [timeLeft, setTimeLeft] = useState(STARTING_TIME)
  const [timerOn, setTimerOn] = useState(false)
  const [activeGame, setActiveGame] = useState(false);
  const [countdownTime, setCountdownTime] = useState(0);

  const inputEl = useRef(null);


  const handleInput = (e) => {
    const {value} = e.target;
    setText(value);
  }

  const calculateWordCount = () => setLength(text.split(' ').filter(word => word !== '').length)

  const startGame = () => {
    setActiveGame(true);
    setCountdownTime(3);
    setTimeLeft(STARTING_TIME);
    setTimeout(() => {
      setTimerOn(true);
      setText('');
      inputEl.current.focus();
    }, 3000)
  }

  const endGame = () => {
    calculateWordCount();
    setTimerOn(false);
    setActiveGame(false);
  }

  useEffect(() => {
    if (countdownTime > 0) {
      setText(`Begin typing in ${countdownTime}`);
      setTimeout(() => {
        setCountdownTime(prevTime => prevTime - 1)
      }, 1000)
    }
  }, [countdownTime])

  useEffect(() => {
    if (timeLeft > 0 && timerOn) {
      setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1)
      }, 1000)
    } else if (timerOn && timeLeft === 0 ) {
      endGame();
    }
  }, [timeLeft, timerOn])

  return {text, inputEl, handleInput, timerOn, timeLeft, startGame, activeGame, length}

}

export default useLogic;
