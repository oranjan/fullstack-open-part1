const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const sum = good + neutral + bad;
  const average = sum == 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / sum;
  const positive = sum === 0 ? 0 : (good / sum) * 100;

  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
      <li>all {sum}</li>
      <li>average {average}</li>
      <li>positive {positive}%</li>
      <h3>statistics</h3>
    </ul>
  );
};

export default Statistics;
