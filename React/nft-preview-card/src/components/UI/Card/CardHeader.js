const CardHeader = (props) => {
    return (
        <img className="rounded-lg" src={props.img} alt={props.title}/>
    );
}

export default CardHeader;