import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
  return (
    <ul>
      <li>
        <span>Good: </span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </li>
      <li>
        <span> Bad: </span>
        <span>{bad}</span>
      </li>

      <li>
        <span>Total: </span>
        <span>{total}</span>
      </li>
      <li className={css.positive}>
        <span> Positive feedback: </span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
