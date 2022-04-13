const Dot = (props) => {
  return (
    <div onClick={props.onClick}
      className={`${"flex items-center justify-center w-10 h-10 rounded-full bg-light"} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  );
};

export default Dot;