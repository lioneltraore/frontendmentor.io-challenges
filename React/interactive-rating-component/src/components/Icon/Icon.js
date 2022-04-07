import logo from '../../assets/images/icon-star.svg';
import Dot from '../dot/Dot';

const Icon = () => {
    return (
        <Dot>
            <img src={logo} alt="star icon" />
        </Dot>
    );
}

export default Icon;