import Card from "../card/Card";
import illustration from '../../assets/images/illustration-thank-you';


const Feedback = (props) => {
    return (
        <Card>
            <div>
                <img src={illustration} alt="thank you illustration" />
            </div>
        </Card>
    );
}

export default Feedback;