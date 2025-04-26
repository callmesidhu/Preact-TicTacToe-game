import { h } from 'preact';
import './Status.css';

const Status = ({ winner, resetBoard }) => {
  return (
    <div className="status">
      {winner ? (
        <div>
          <h2>Player {winner} wins!</h2>
          <button onClick={resetBoard}>Restart Game</button>
        </div>
      ) : (
        <h2>It's Player X's turn</h2>
      )}
    </div>
  );
};

export default Status;
