import { h } from 'preact';
import Board from './components/Board.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          Tic <span className="text-blue-500">Tac</span> Toe
        </h1>
      </header>
      <Board />
    </div>
  );
}