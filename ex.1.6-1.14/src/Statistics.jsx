const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const sum = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / sum;
  const positive = (good / sum) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <h2>No feedback given</h2>;
  }
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
