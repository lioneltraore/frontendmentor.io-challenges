const CardBody = (props) => {
    return (
        <>
            <h1 className="text-white font-outfit-semibold mt-5 text-[22px]">Equilibrium #3429</h1>

            <p className="mt-2 font-outfit-light">
                Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex justify-between mt-4">
                <span className="flex text-cyan font-outfit">
                    <img className="object-scale-down mr-1" src={props.priceIcon} alt={props.priceIconTile}/>
                    0.041 ETH
                </span>
                <span className="flex font-outfit">
                    <img className="object-scale-down mr-1" src={props.clockIcon} alt={props.clockIconTitle}/>
                    3 days left
                </span>
            </div>
        </>
    );
}

export default CardBody;