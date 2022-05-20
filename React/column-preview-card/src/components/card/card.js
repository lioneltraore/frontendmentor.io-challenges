import Button from "../Button/Button";


const Card = (props) => {
    return (
        <div className={`${props.className} p-12 text-default max-w-xs`}>
            <img src={props.icon} alt={props.title} />

            <h2 className="my-8 text-4xl uppercase text-light-gray font-bsd">{props.title}</h2>

            <p className="leading-7 text-transparent mb-7">{props.body}</p>

            <Button>Learn More</Button>

        </div>
    );
}

export default Card;