
const Card = (props) => {
  return (
    <div className={`${props.className} bg-dark rounded-default p-6 max-w-[350px]`}>
      {props.children}
    </div>
  );
};

export default Card;
