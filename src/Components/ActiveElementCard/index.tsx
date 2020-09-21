import React, { useState, useEffect } from "react";
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

function ActiveElementCard({ active }: AppProps): JSX.Element {

  // #0 czemu filter? Wszystko co sie da, poza komponent wyrzucamy
  const FilterDataElements = (active: number) => {
    return DataElements.filter((element) => element.atomic === active);
  };

  // #1 po co to jest?
  const [currentElement, setCurrentElement] = useState<ElementsItem>(
    FilterDataElements(active)[0]
  );

  // #2 po co to jest?
  useEffect(() => {
    setCurrentElement(FilterDataElements(active)[0]);
  }, [active]);


  // odstepy w jsx dla lepszej czytelnosci

  return (
    <Card>
      <CardHeader className={currentElement.group}>
        <CardHeaderDescription>
          <p>{currentElement.name}</p>
          <p>{currentElement.group.replace("_", " ")}</p>
        </CardHeaderDescription>
        <CardHeaderSymbol>{currentElement.symbol}</CardHeaderSymbol>
      </CardHeader>

      <CardList>
        {/* tutaj zmapowalbys to lepiej, zamiast w ten sposob */}

        <CardListItem>
          <p>Atomic Number</p>
          <p>{currentElement.atomic}</p>
        </CardListItem>
        <CardListItem>
          <p>Atomic Mass</p>
          <p>{currentElement.atomicMass}</p>
        </CardListItem>
        <CardListItem>
          <p>Electronic C.</p>
          <p>{currentElement.electronicConfiguration}</p>
        </CardListItem>
        <CardListItem>
          <p>Electronegativity</p>
          <p>{currentElement.electronegativity}</p>
        </CardListItem>
        <CardListItem>
          <p>Atomic Radius</p>
          <p>{currentElement.atomicRadius}</p>
        </CardListItem>
        <CardListItem>
          <p>Ionic Radius</p>
          <p>{currentElement.ionRadius}</p>
        </CardListItem>
        <CardListItem>
          <p>Van del Waals Radius</p>
          <p>{currentElement.vanDelWaalsRadius}</p>
        </CardListItem>
        <CardListItem>
          <p>Ionization Energy</p>
          <p>{currentElement.ionizationEnergy}</p>
        </CardListItem>
        <CardListItem>
          <p>Electron Affinity</p>
          <p>{currentElement.electronAffinity}</p>
        </CardListItem>
        <CardListItem>
          <p>Oxidation States</p>
          <p>{currentElement.oxidationStates}</p>
        </CardListItem>
        <CardListItem>
          <p>Standard State</p>
          <p>{currentElement.standardState}</p>
        </CardListItem>
        <CardListItem>
          <p>Bonding Type</p>
          <p>{currentElement.bondingType}</p>
        </CardListItem>
        <CardListItem>
          <p>Melting Point</p>
          <p>{currentElement.meltingPoint}</p>
        </CardListItem>
        <CardListItem>
          <p>Boiling Point</p>
          <p>{currentElement.boilingPoint}</p>
        </CardListItem>
        <CardListItem>
          <p>Density</p>
          <p>{currentElement.density}</p>
        </CardListItem>
        <CardListItem>
          <p>Year Discovered</p>
          <p>{currentElement.yearDiscovered}</p>
        </CardListItem>
        <CardListItem>
          <p>Valency</p>
          <p>{currentElement.valency}</p>
        </CardListItem>
      </CardList>
    </Card>
  );
}

export default ActiveElementCard;
