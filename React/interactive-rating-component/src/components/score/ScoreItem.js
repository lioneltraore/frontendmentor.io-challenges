import Dot from "../dot/Dot";

const ScoreItem = (props) => {
  const activeStateHandler = () => {
    props.onSelectScore(props.level);
  };

  return (
    <Dot onClick={activeStateHandler} 
    className={`
     cursor-pointer hover:bg-primary hover:text-primary-light
    ${props.selectedScore === props.level ? "bg-lighter text-white" : ""}`}
    >
      {props.level}
    </Dot>
  );
};

export default ScoreItem;