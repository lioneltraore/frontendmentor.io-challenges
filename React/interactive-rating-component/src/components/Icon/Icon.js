import logo from '../../assets/images/icon-star.svg';

const Icon = () => {
    return (
        <div className='p-2 bg-light w-fit rounded-full mb-5'>
            <img src={logo} alt="star icon" />
        </div>
    );
}

export default Icon;