const Button = (props) => {
    return (
        <div className="flex px-8 py-3 border-2 rounded-full w-max bg-light-gray border-empty hover:bg-empty hover:text-light-gray hover:border-2 hover:border-light-gray hover:cursor-pointer">
            {props.children}
        </div>
    );
}

export default Button;