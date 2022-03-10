import { linesFor3D, linesFor4D } from "./constants.services";

export function calculateWinner(squares, dimension) {
  let lines = dimension === 3 ? linesFor3D : linesFor4D;

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
  
	return null;
}

export function isFullBoard(board) {
  for(let i = 0; i < board.length; i++) {
    if(board[i] == null) return false;
  }

  return true;
}