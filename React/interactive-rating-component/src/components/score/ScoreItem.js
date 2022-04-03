const ScoreItem = (props) => {
    return (
        <div className="bg-light flex justify-center items-center h-10 w-10 rounded-full ">{props.level}</div>
    );
}

export default ScoreItem;