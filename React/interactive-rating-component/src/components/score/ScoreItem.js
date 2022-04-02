const ScoreItem = (props) => {
    return (
        <div className="bg-light flex justify-center items-center h-[40px] w-[40px] rounded-full ">{props.level}</div>
    );
}

export default ScoreItem;