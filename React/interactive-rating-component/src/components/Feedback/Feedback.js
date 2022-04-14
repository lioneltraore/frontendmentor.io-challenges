import Card from "../UI/card/Card";
import illustration from "../../assets/images/illustration-thank-you.svg";
import Backdrop from "../UI/Backdrop/Backdrop";

const Feedback = (props) => {

  const stopPropagation = (event) => {
    event.stopPropagation();
  }

  return (
    <Backdrop onClick={props.close}>
      <Card onClick={stopPropagation} className="flex flex-col items-center">
        <div className="mt-5">
          <img src={illustration} alt="thank you illustration" />
        </div>
        <span className="block px-4 py-1 mt-8 text-default text-primary rounded-3xl bg-light w-max">
          You selected {props.score} out of 5
        </span>
        <h2 className="mt-8 text-2xl font-medium">Thank you!</h2>
        <p className="my-4 text-center text-default">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </Card>
    </Backdrop>
  );
};

export default Feedback;
