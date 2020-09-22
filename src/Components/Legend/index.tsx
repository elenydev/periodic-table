import React from "react";
import { ElementsItem } from "../../ElementsItem";
import { Wrapper, LegendGrid, GridItem, LegendHeader } from "./legend.styles";

const dataElements: ElementsItem[] = require("../../data/elements.json");

const removeDuplicates = (array): any[] => {
  return [...new Set(array)];
};

const legendArray: string[] = removeDuplicates(
  Object.values(dataElements.map((el) => el.group))
);

const Legend = () => {
  return (
    <Wrapper>
      <LegendHeader>Legend: </LegendHeader>

      <LegendGrid>
        {legendArray.map((element, index) => {
          return (
            <GridItem key={index} className={element}>
              <p>{element.replace(/_/g, " ")}</p>
            </GridItem>
          );
        })}
      </LegendGrid>
    </Wrapper>
  );
};

export default Legend;
