import illustration from "../../../assets/images/image-equilibrium.jpg";
import priceIcon from "../../../assets/images/icon-ethereum.svg";
import clockIcon from "../../../assets/images/icon-clock.svg";
import avatar from "../../../assets/images/image-avatar.png";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

const Card = () => {
    return (
        <div className="p-6 bg-dark-blue-secondary rounded-2xl text-soft-blue max-w-[350px]">
            <CardHeader img={illustration} title={"equilibrium"} />
            <CardBody priceIcon={priceIcon} 
            priceIconTile="ethereum" clockIcon={clockIcon} clockIconTile="clock" />
            <CardFooter avatar={avatar} />
        </div>
    );
}

export default Card;