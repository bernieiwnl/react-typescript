import "../css/Card.css";

interface Props {
  className: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: Props) => {
  const classCard = "card " + className;
  return <div className={classCard}> {children}</div>;
};

export default Card;
