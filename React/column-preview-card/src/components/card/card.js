

const Card = (props) => {
    return (
        <div>
            <img src={props.icon} alt={props.title} />

            <h2>{props.title}</h2>

            <p>{props.body}</p>

            <button>Button</button>

        </div>
    );
}

export default Card;