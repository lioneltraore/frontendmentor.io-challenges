import Icon from "../Icon/Icon";

const Card = () => {
  return (
    <div className="bg-dark rounded-xl p-6">
      <Icon />
      <h2 className="text-white text-2xl mb-5">How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
};

export default Card;
