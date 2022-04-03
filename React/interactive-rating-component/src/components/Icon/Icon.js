import logo from '../../assets/images/icon-star.svg';

const Icon = () => {
    return (
        <div className='flex w-[40px] h-[40px] justify-center items-center bg-light rounded-full mb-5'>
            <img src={logo} alt="star icon" />
        </div>
    );
}

export default Icon;