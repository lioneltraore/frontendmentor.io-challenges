const Button = (props) => {
    return (
        <div className={`flex bg-light-gray w-max ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Button;