const Dot = (props) => {
    return (
        <div className='flex w-10 h-10 justify-center overflow-hidden items-center bg-light rounded-full mb-5'>
            {props.children}
        </div>
    )
}

export default Dot;