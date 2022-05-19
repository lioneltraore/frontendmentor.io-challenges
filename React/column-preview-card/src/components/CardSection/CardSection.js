import Card from "../Card/Card";
import iconSuv from "../../assets/images/icon-suvs.svg";
import iconLuxury from "../../assets/images/icon-luxury.svg";
import iconSedans from "../../assets/images/icon-sedans.svg";

const CardSection = () => {

    const bodySedan = `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
    or on your next road trip.`;

    const bodySuv = `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
    and off-road adventures.`;

    const bodyLuxury = `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
    rental and arrive in style.`;

    return (
        <div className="overflow-hidden rounded-lg">
            <Card 
           className="bg-bright-orange text-bright-orange"
            icon={iconSedans} 
            title="sedans" 
            body={bodySedan} 
            />

            <Card 
            className="bg-dark-cyan text-dark-cyan"
            icon={iconSuv} 
            title="suvs" 
            body={bodySuv} 
            />

            <Card 
            className="bg-very-dark-cyan text-very-dark-cyan"
            icon={iconLuxury} 
            title="luxury" 
            body={bodyLuxury}  
            />
        </div>
    );
}

export default CardSection;