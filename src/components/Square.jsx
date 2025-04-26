import { h } from 'preact';

export default function Square({ value, onClick }) {
  return (
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
}