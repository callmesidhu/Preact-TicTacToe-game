import { h } from 'preact';
import './Cell.css';

const Cell = ({ value, onClick }) => {
  return (
    <div className="cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
