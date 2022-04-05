import { useState } from "react";

const ScoreItem = (props) => {

    const activeStateHandler = () => {
        props.onSelectScore(props.level);
    }

    return (
        <div onClick={activeStateHandler}
        className={`bg-light flex justify-center 
        items-center h-10 w-10 rounded-full 
        cursor-pointer hover:bg-primary hover:text-primary-light
        ${props.selectedScore === props.level ? 'bg-lighter text-white' : ''}`}>{props.level}</div>
    );
}

export default ScoreItem;