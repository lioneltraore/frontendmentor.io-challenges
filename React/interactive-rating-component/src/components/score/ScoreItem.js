import Dot from "../dot/Dot";

const ScoreItem = (props) => {
  const activeStateHandler = (event) => {
    props.onSelectScore(props.level);
    console.log(event);
  };

  return (
    <Dot>
      <div
        onClick={activeStateHandler}
        className={`
        w-full h-full flex justify-center items-center cursor-pointer hover:bg-primary hover:text-primary-light
        ${props.selectedScore === props.level ? "bg-lighter text-white" : ""}`}
      >
        {props.level}
      </div>
    </Dot>
  );
};
// bg-light flex justify-center
//         items-center h-10 w-10 rounded-full
export default ScoreItem;
