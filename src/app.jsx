import { h } from 'preact';
import { useState } from 'preact/hooks';

const Square = ({ value, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
      bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl shadow-lg
      hover:from-purple-400 hover:to-pink-400 hover:shadow-2xl
      transition transform hover:scale-105 focus:outline-none"
  >
    <span className="text-4xl font-semibold text-white drop-shadow-md">{value}</span>
  </button>
);

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (s) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a, b, c] of lines) {
      if (s[a] && s[a] === s[b] && s[a] === s[c]) return s[a];
    }
    return null;
  };

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (newSquares[i] || calculateWinner(newSquares)) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-xl font-medium text-gray-700">{status}</div>
      <div className="grid grid-cols-3 gap-4 bg-white bg-opacity-40 backdrop-blur-md
        p-6 rounded-3xl shadow-2xl">
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <div className="min-h-screen flex flex-col items-center justify-center
    bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 p-6">
    <header className="mb-8 text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold
        text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
        Tic <span className="text-blue-500">Tac</span> Toe
      </h1>
    </header>
    <Board />
  </div>
);

export default App;
