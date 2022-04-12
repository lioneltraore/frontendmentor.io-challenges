import Card from "../card/Card";
import illustration from "../../assets/images/illustration-thank-you.svg";

const Feedback = (props) => {
  return (
    <Card>
      <div className="flex items-center justify-center">
        <img src={illustration} alt="thank you illustration" />
      </div>
      <span>You selected 3 out of 5</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default Feedback;
