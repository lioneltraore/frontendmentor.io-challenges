const Button = (props) => {
  return (
    <div className="flex justify-center items-center rounded-3xl mt-5 w-full h-11 bg-primary text-primary-light uppercase font-medium tracking-[4px]">
      {props.label}
    </div>
  );
};

export default Button;
