import React from "react";
import { ElementsItem } from "../../ElementsItem";
import { GridItem } from "./table.styles";
type AppProps = {
  currentElement: number;
  disabled?: boolean;
  currentElementProperties?: ElementsItem;
  clickEvent?: any;
  active?: string;
};

const Item = ({
  currentElement,
  currentElementProperties,
  clickEvent,
  active,
}: AppProps): JSX.Element => {
  if (currentElementProperties) {
    const { group, symbol, name } = currentElementProperties;
    return (
      <>
        <GridItem
          className={`${group}  ${active}`}
          onClick={() => clickEvent()}
        >
          <p>{currentElement}</p>
          <p>{symbol}</p>
          <p>{name}</p>
        </GridItem>
      </>
    );
  } else {
    return (
      <>
        <GridItem disabled>
          <p>{currentElement}</p>
        </GridItem>
      </>
    );
  }
};

export default Item;
