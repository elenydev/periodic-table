import React, { useState } from "react";
import {
  Wrapper,
  GridTemplateDesktop,
  GridTemplateMobile,
} from "./table.styles";
import { ElementsItem } from "../../ElementsItem";
import ActiveElementCard from "../ActiveElementCard/index";
import Header from "../Header/index";
import Item from "./Item";
import Legend from "./../Legend/index";

const elements: [] = require("../../data/pt.json").flat(); // reducing array nesting
const elementsMobile: number[] = require("../../data/pt-mobile.json").flat(); //reducing array nesting
const dataElements: ElementsItem[] = require("../../data/elements.json");
const naturalElements: number[] = elements.slice(0, 126);
const IGNORED_ELEMENTS_NUMBERS = [0, -1, -2];

const Table = (): JSX.Element => {
  const [activeElement, setActiveElement] = useState<number>(26);
  const handleActiveElement = (element: number) => {
    setActiveElement(element);
  };

  return (
    <>
      <Header />

      <Wrapper>
        <ActiveElementCard currentDisplayedElementIndex={activeElement} />

        <GridTemplateDesktop>
          {naturalElements.map((element: number, index: number) => {
            const currentElement: number = element;
            const currentElementProperties = dataElements[currentElement - 1];
            if (!IGNORED_ELEMENTS_NUMBERS.includes(currentElement)) {
              return (
                <Item
                  key={index}
                  currentElement={currentElement}
                  currentElementProperties={currentElementProperties}
                  clickEvent={() => handleActiveElement(currentElement)}
                  active={currentElement === activeElement ? "active" : ""}
                ></Item>
              );
            }
            return <Item key={index} currentElement={currentElement}></Item>;
          })}
        </GridTemplateDesktop>

        <GridTemplateMobile>
          {elementsMobile.map((element: number, index: number) => {
            const currentElement: number = element;
            const currentElementProperties = dataElements[currentElement - 1];
            if (IGNORED_ELEMENTS_NUMBERS.includes(currentElement)) {
              return <Item key={index} currentElement={currentElement}></Item>;
            } else {
              return (
                <Item
                  key={index}
                  currentElement={currentElement}
                  currentElementProperties={currentElementProperties}
                  clickEvent={() => handleActiveElement(currentElement)}
                  active={currentElement === activeElement ? "active" : ""}
                ></Item>
              );
            }
          })}
        </GridTemplateMobile>

        <Legend />
      </Wrapper>
    </>
  );
};
export default Table;
