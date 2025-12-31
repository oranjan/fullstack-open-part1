import StatisticLine from "./StatisticLine";

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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={sum} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
      <h3>statistics</h3>
    </ul>
  );
};

export default Statistics;
