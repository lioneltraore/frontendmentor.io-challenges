import { useState } from "react";
import ScoreItem from "./ScoreItem";

const Score = (props) => {
    const scores = [1, 2, 3, 4, 5];
    const [activeScore, setActiveScore] = useState(0);

    const selectScoreHandler = (activeScore) => {
        setActiveScore(activeScore);
        props.onSelectScore(activeScore);
        console.log(activeScore);
    }

    return (
        <div className="flex justify-between mt-5">
            {scores.map(score => <ScoreItem onSelectScore={selectScoreHandler} selectedScore={activeScore} level={score} key={score}/>)}
        </div>
    );
}

export default Score;