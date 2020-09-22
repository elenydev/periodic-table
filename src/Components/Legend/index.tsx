import React from "react";
import { ElementsItem } from "../../ElementsItem";
import { Wrapper, LegendGrid, GridItem, LegendHeader } from "./legend.styles";

const DataElements = require("../../data/elements.json");
const ConvertedObjectToArray: ElementsItem[] = Object.values(DataElements);
const LegendArray: string[] = []; //array without group duplicates
ConvertedObjectToArray.map((el: ElementsItem) => {
  if (!LegendArray.includes(el.group)) LegendArray.push(el.group);
  return null;
}); //maping throught the array to remove duplicates

const Legend = () => {
  return (
    <Wrapper>
      <LegendHeader>Legend: </LegendHeader>

      <LegendGrid>
        {LegendArray.map((nameOfGroup, index) => {
          return (
            <GridItem key={index} className={nameOfGroup}>
              <p>{nameOfGroup.replace(/_/g, " ")}</p>
            </GridItem>
          );
        })}
      </LegendGrid>
    </Wrapper>
  );
};

export default Legend;
