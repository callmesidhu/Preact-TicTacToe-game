import { h } from 'preact';
import { useState } from 'preact/hooks';
import Square from './Square.jsx';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
    if (showModal) return;
    const newSquares = squares.slice();
    if (newSquares[i]) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setModalMessage(`Winner: ${winner}`);
      setShowModal(true);
    } else if (!newSquares.includes(null)) {
      setModalMessage('Draw!');
      setShowModal(true);
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className="relative flex flex-col items-center space-y-4">
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <p className="text-2xl font-bold mb-4">{modalMessage}</p>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {!showModal && (
        <div className="text-xl font-medium text-gray-700">
          Next player: {xIsNext ? 'X' : 'O'}
        </div>
      )}
      <div className="grid grid-cols-3 gap-4 bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>
    </div>
  );
}