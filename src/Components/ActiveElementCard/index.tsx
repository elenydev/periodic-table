import React from "react";
import { ElementsItem } from "../../ElementsItem";
import {
  Card,
  CardHeader,
  CardHeaderDescription,
  CardHeaderSymbol,
  CardList,
  CardListItem,
} from "./activeElementCard.styles";
const DataElements: ElementsItem[] = require("../../data/elements.json");
type AppProps = {
  active: number;
};

const ActiveElementCard = ({ active }: AppProps): JSX.Element => {
  const currentElement: ElementsItem = DataElements[active - 1];
  const { group, name, symbol } = currentElement;
  const element = Object.keys(currentElement).slice(3, 21);
  const elementValues = Object.values(currentElement).slice(3, 21);

  return (
    <Card>
      <CardHeader className={group}>
        <CardHeaderDescription>
          <p>{name}</p>
          <p>{group.replace(/_/g, " ")}</p>
        </CardHeaderDescription>

        <CardHeaderSymbol>{symbol}</CardHeaderSymbol>
      </CardHeader>

      <CardList>
        {element.map((el, index) => {
          const caption = el
            .replace(/([A-Z]+|[A-Z]?[a-z]+)(?=[A-Z]|\b)/g, "!$&")
            .split("!");
          const value: string | number = elementValues[index];
          if (typeof value === "string") {
            return (
              <CardListItem key={index}>
                <p>{caption.map((el) => el + " ")}</p>
                <p>{value.replace(/_/g, " ")}</p>
              </CardListItem>
            );
          } else {
            return (
              <CardListItem key={index}>
                <p>{caption.map((el) => el + " ")}</p>
                <p>{value}</p>
              </CardListItem>
            );
          }
        })}
      </CardList>
    </Card>
  );
};

export default ActiveElementCard;
