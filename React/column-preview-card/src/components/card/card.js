import Button from "../button/button";


const Card = (props) => {
    return (
        <div className={`p-12 text-transparent text-default bg-${props.color}`}>
            <img src={props.icon} alt={props.title} />

            <h2>{props.title}</h2>

            <p className="leading-7">{props.body}</p>

            <Button className={`text-${props.color}`}>Learn More</Button>

        </div>
    );
}

export default Card;