import Part from "./Part";

export default function Content(props) {
  const { parts } = props;
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
    </>
  );
}
