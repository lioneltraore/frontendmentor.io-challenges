const Button = (props) => {
    return (
        <div className="flex px-8 py-3 rounded-full w-max bg-light-gray">
            {props.children}
        </div>
    );
}

export default Button;