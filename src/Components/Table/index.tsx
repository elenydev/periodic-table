import React from "react";
import { Wrapper, GridTemplate, GridItem } from "./table.styles";
import { ElementsItem } from "../../ElementsItem";
import Header from "../Header/index";
const Elements: [[]] = require("../../data/pt.json");
const DataElements: ElementsItem[] = require("../../data/elements.json");

function Table(): JSX.Element {
  function elementsArrayModify(): number[] {
    const array: number[] = Elements.flat();
    array.splice(126, array.length);
    return array;
  }
  function showElementProperties(item: ElementsItem) {
    console.log(item);
  }
  return (
    <>
      <Header />
      <Wrapper>
        <GridTemplate>
          {elementsArrayModify().map((element: number, index) => {
            const currentElement: number = element;
            const currentElementProperties = DataElements[currentElement - 1];
            if (
              currentElement === 0 ||
              currentElement === -1 ||
              currentElement === -2
            ) {
              return <GridItem key={index} disabled></GridItem>;
            } else {
              return (
                <GridItem
                  key={index}
                  color={currentElementProperties.cpkHexColor}
                  className={currentElementProperties.group}
                  onClick={() =>
                    showElementProperties(currentElementProperties)
                  }
                >
                  <p>{currentElement}</p>
                  <h3>{currentElementProperties.symbol}</h3>
                  <p>{currentElementProperties.name}</p>
                </GridItem>
              );
            }
          })}
        </GridTemplate>
      </Wrapper>
    </>
  );
}
export default Table;
