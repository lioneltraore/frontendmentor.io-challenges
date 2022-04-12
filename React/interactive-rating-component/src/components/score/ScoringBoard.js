import { useState } from "react";
import Button from "../Button/Button";
import Card from "../card/Card";
import Icon from "../icon/Icon";
import Score from "../score/Score";

const ScoringBoard = (props) => {
  const [score, setScore] = useState(1);

  const scoreHandler = (userScore) => {
    console.log(typeof(userScore));
  }

  const submitScoreHandler = () => {
    props.onSubmitScoring(score);
  }

  return (
    <Card>
      <Icon />
      <h2 className="mb-5 text-2xl text-white">How did we do?</h2>
      <p className="text-default">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Score />
      <Button type="button" onClick={submitScoreHandler} label="Submit" />
    </Card>
  );
};

export default ScoringBoard;
