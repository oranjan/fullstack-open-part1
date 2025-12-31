const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <li>
      {text} {value}
    </li>
  );
};

export default StatisticLine;
