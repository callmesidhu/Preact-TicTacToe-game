import { h } from 'preact';
import Cell from './Cell';
import Status from './Status';
import './Board.css';

const Board = ({ board, onCellClick, winner, resetBoard }) => {
  return (
    <div className="board">
      <Status winner={winner} resetBoard={resetBoard} />
      <div className="board-grid">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
