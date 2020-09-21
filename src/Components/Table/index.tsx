import React, { useState } from "react";
import { Wrapper, GridTemplate, GridItem } from "./table.styles";
import { ElementsItem } from "../../ElementsItem";
import ActiveElementCard from "../ActiveElementCard/index";
import Header from "../Header/index";

const Elements: [] = require("../../data/pt.json").flat(); // reducing array nesting
const DataElements: ElementsItem[] = require("../../data/elements.json");

// Nazwy zmiennych zawsze musza byc pozytywne. Bez Notów.
const NotSyntheticElements: number[] = Elements.slice(0, 126);


const IGNORED_ELEMENTS_NUMBERS = [0, -1, -2];

function Table(): JSX.Element {
  const [activeElement, setActiveElement] = useState<number>(26);


  // zasadniczo unikamy keyworda function, wszedzie const => ()
  function showElementProperties(item: number) {
    setActiveElement(item);
  }
  return (
    <>
      <Header />
      <Wrapper>
        <ActiveElementCard active={activeElement} />

        {/* odstepy dla czytelnosci*/}

        <GridTemplate>
          {NotSyntheticElements.map((element: number, index: number) => {
            const currentElement: number = element;
            const currentElementProperties = DataElements[currentElement - 1];
            if (IGNORED_ELEMENTS_NUMBERS.includes(currentElement)) {
              return <GridItem key={index} disabled></GridItem>;
            } else {
              return (
                  // Element do oddzielnego komponentu, wteyd przekazujesz tylko:
                  // currentElementProperties, activeElement, setActiveElement.
                  // Pozniej destrukturyzujesz sobie wszelkie propertiesy typu 'atomic' juz w komponencie.
                  // mozesz dodac jakis wyroznik ze to jest obecny element, np tlo jakies lekko szare, czy cos

                <GridItem
                  key={index}
                  color={currentElementProperties.cpkHexColor}
                  className={currentElementProperties.group}
                  onClick={() =>
                    showElementProperties(currentElementProperties.atomic)
                  }
                >
                  <p>{currentElement}</p>
                  <p>{currentElementProperties.symbol}</p>
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
