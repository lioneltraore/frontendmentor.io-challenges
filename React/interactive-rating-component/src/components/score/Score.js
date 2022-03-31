import ScoreItem from "./ScoreItem";

const Score = () => {
    const scores = [1, 2, 3, 4, 5];

    return (
        <div className="flex justify-between mt-5">
            {scores.map(score => <ScoreItem level={score} key={score}/>)}
        </div>
    );
}

export default Score;