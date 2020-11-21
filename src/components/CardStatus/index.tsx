import React from "react";
import { IconBaseProps } from "react-icons";

import { Card, CardHeader, CardIcon, CardFooter } from "./styles";

interface CardStatusProps {
  headerIcon: React.ComponentType<IconBaseProps>;
  title: String;
  value: String;
  unidadeMedida?: string;
  type?: "success" | "warning" | "danger" | "info";
  footerIcon: React.ComponentType<IconBaseProps>;
  textFooter: String;
}

const CardStatus: React.FC<CardStatusProps> = ({
  headerIcon: HeaderIcon,
  title,
  value,
  unidadeMedida,
  type,
  footerIcon: FooterIcon,
  textFooter,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardIcon type={type}>
          <HeaderIcon size={40} />
        </CardIcon>
        <p>{title}</p>
        <h3>
          {value} {unidadeMedida && <small>{unidadeMedida}</small>}
        </h3>
      </CardHeader>
      <CardFooter>
        <div>
          <FooterIcon size={14} />
          {textFooter}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardStatus;
