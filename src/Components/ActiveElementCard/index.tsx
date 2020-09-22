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
const dataElements: ElementsItem[] = require("../../data/elements.json");
const spacingTextAtCapitalLetters = /([A-Z]+|[A-Z]?[a-z]+)(?=[A-Z]|\b)/g;
type AppProps = {
  currentDisplayedElementIndex: number;
};

const ActiveElementCard = ({
  currentDisplayedElementIndex,
}: AppProps): JSX.Element => {
  const currentElement: ElementsItem =
    dataElements[currentDisplayedElementIndex - 1];
  const { group, name, symbol } = currentElement;

  const ElementsConvertedToArray = Object.entries(currentElement).slice(3, 21); // without name,symbol and group properties from header and wrong valency

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
        {ElementsConvertedToArray.map(([key, value], index) => {
          const caption = key
            .replace(spacingTextAtCapitalLetters, "!$&")
            .split("!");
          return (
            <CardListItem key={index}>
              <p>{caption.map((el) => el + " ")}</p>
              <p>
                {typeof value === "string" ? value.replace(/_/g, " ") : value}
              </p>
            </CardListItem>
          );
        })}
      </CardList>
    </Card>
  );
};

export default ActiveElementCard;
