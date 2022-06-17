const CardBody = (props) => {
    return (
        <>
            <h1 className="text-white font-outfit-semibold mt-5 text-[22px]">Equilibrium #3429</h1>

            <p className="text-soft-blue font-outfit-light mt-2">
                Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex justify-between mt-4">
                <span className="flex text-cyan font-outfit">
                    <img className="mr-1 object-scale-down" src={props.priceIcon} alt={props.priceIconTile}/>
                    0.041 ETH
                </span>
                <span className="flex text-soft-blue font-outfit">
                    <img className="mr-1 object-scale-down" src={props.clockIcon} alt={props.clockIconTitle}/>
                    3 days left
                </span>
            </div>
        </>
    );
}

export default CardBody;