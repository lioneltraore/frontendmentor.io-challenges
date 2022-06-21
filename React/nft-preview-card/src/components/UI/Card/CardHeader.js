import { useState } from "react";

const CardHeader = (props) => {

    const [isHover, setIsHover] = useState('');

    const onMouseEnter = e => {
        setIsHover(true);
        console.log("entered");
    };

    const onMouseLeave = e => {
        setIsHover(false);
        console.log("left");
    };
    
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative flex items-center justify-center cursor-pointer">
            { isHover && 
                <div className="absolute w-full h-full rounded-lg opacity-60 bg-cyan">
                </div> 
            }
            { isHover && <img className="absolute" src={props.icon} alt="view" />}
            <img className="rounded-lg" src={props.img} alt={props.title}/>
        </div>
    );
}

export default CardHeader;