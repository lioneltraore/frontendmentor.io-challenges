import logo from '../../assets/images/icon-star.svg';
import Dot from '../dot/Dot';

const Icon = (props) => {
    return (
        <Dot className={props.className}>
            <img src={logo} alt="star icon" />
        </Dot>
    );
}

export default Icon;