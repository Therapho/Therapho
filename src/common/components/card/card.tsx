import { CSSProperties } from "react";
import { cardStyles } from "./card.styles";

type CardProp = {
  children: React.ReactNode;
  width?: number | string | undefined;
};
const Card = ({ children, width = undefined }: CardProp) => {
  const style: CSSProperties = { width };
  return (
    <section role="group" className={cardStyles.card} style={style}>
      {children}
    </section>
  );
};

export default Card;
