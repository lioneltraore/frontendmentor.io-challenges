const CardFooter = (props) => {
    return (
        <div className="flex items-center border-t-[1px] border-dark-blue-tertiary mt-4 pt-4">
            <img className="h-8 border-[1px] border-white rounded-full" src={props.avatar} alt="avatar" />
            <p className="ml-3">
                Creation of <span className="text-white">Jules Wyverne</span>
            </p>
        </div>
    );
}

export default CardFooter;