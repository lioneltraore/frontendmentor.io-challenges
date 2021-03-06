const Button = (props) => {

  const clickHandler = () => {
    props.onClick();
  }

  return (
    <div onClick={clickHandler} className="flex justify-center items-center rounded-3xl 
    mt-5 w-full h-11 bg-primary text-primary-light 
    uppercase font-medium tracking-[4px] cursor-pointer
    hover:text-primary hover:bg-white">
      {props.label}
    </div>
  );
};

export default Button;
