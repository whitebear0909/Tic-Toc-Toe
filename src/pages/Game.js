import {useState} from "react";
import Board from '../components/Board';
import Setting from '../components/Setting';
import { calculateWinner, isFullBoard} from '../services/function.service';
import { playerTypes } from '../services/constants.services';

const Game = () => {
  const [whoNext, setWhoNext] = useState(0);
  const [dimension, setDimension] = useState(3);
  const [playerType, setPlayerType] = useState(0);
  const [board, setBoard] = useState(Array(dimension * dimension).fill(null));
  const winner = calculateWinner(board, dimension);
  const [isStarted, setIsStarted] = useState(false);
  const [noWinner, setNoWinner] = useState(false);

  const handleClick = (i) => {
    const boardCopy = [...board];

    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    
    boardCopy[i] = playerTypes[playerType][whoNext];
    setBoard(boardCopy);

    if(isFullBoard(boardCopy)) return setNoWinner(true);
    
    setWhoNext((whoNext + 1) % playerTypes[playerType].length);
  };

  const startGame = () => {
    setIsStarted(true);
    setWhoNext(0);
    setNoWinner(false);
    setBoard(Array(dimension * dimension).fill(null));
  }

  return (
    <>
      <Setting 
        isStarted = { isStarted }
        dimension = { dimension }
        playerType = { playerType }
        setDimension = { setDimension }
        setPlayerType = { setPlayerType }
      />
      {
        isStarted ? 
        <>
          <Board squares={board} onClick={handleClick} dimension={dimension}/>
          <div><button onClick={() => setIsStarted(false)}>Finish Game</button></div>
          <div>
            <p className="text-panel">
              {winner ? "Winner: " + winner : 
                noWinner ? "No Winner" : "Next Player: " + (playerTypes[playerType][whoNext])
              }
            </p>
          </div>
        </> : <div><button onClick={startGame}>Start Game</button></div>

      }
    </>
  )
}

export default Game;