import { useState } from "react";
import Button from "../Button/Button";
import Card from "../card/Card";
import Icon from "../icon/Icon";
import Score from "../score/Score";

const ScoringBoard = (props) => {
  const [score, setScore] = useState(0);

  const scoreHandler = (userScore) => {
    setScore(userScore);
  }

  const submitScoreHandler = () => {
    console.log('button clicked');
    props.onSubmitScoring(score);
  }

  return (
    <Card>
      <Icon className="mb-5" />
      <h2 className="mb-2 text-2xl text-white ">How did we do?</h2>
      <p className="text-default">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Score onSelectScore={scoreHandler} />
      <Button onClick={submitScoreHandler} label="Submit" />
    </Card>
  );
};

export default ScoringBoard;
