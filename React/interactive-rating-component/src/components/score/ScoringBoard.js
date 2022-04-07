import Button from "../Button/Button";
import Card from "../card/Card";
import Icon from "../icon/Icon";
import Score from "../score/Score";

const ScoringBoard = () => {
  return (
    <Card>
      <Icon />
      <h2 className="text-white text-2xl mb-5">How did we do?</h2>
      <p className="text-default">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Score />
      <Button label="Submit" />
    </Card>
  );
};

export default ScoringBoard;
