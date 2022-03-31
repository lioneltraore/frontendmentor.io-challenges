import Icon from "../icon/Icon";
import Score from "../score/Score";

const Card = () => {
  return (
    <div className="bg-dark rounded-xl p-6">
      <Icon />
      <h2 className="text-white text-2xl mb-5">How did we do?</h2>
      <p className="text-default">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Score />
    </div>
  );
};

export default Card;
