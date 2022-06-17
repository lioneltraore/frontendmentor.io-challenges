import illustration from "../../../assets/images/image-equilibrium.jpg";
import priceIcon from "../../../assets/images/icon-ethereum.svg";
import clockIcon from "../../../assets/images/icon-clock.svg";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

const Card = () => {
    return (
        <div className="p-6 bg-dark-blue-secondary rounded-2xl max-w-[350px]">
            <CardHeader img={illustration} title={"equilibrium"} />
            <CardBody priceIcon={priceIcon} 
            priceIconTile="ethereum" clockIcon={clockIcon} clockIconTile="clock" />
        </div>
    );
}

export default Card;