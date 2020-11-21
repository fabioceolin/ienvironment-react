import React from "react";

import { CardContainer } from "./styles";

const Card: React.FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
