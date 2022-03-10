import Square from './Square';

const Board = ({ squares, onClick, dimension }) => (
	<div className={dimension === 3 ? "board-d3" : "board-d4"}>
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Board;