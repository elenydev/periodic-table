import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  background-color: #0e1a1b;
  overflow-y: auto;
  max-height: 50vh;
  padding: 10px;

  @media (min-width: 1024px) {
    flex: 0.4;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 12px;
  width: 100%;
  &.noble_gases {
    color: #7e57c2;
  }

  &.alkali_metals {
    color: #ef5350;
  }

  &.alkali_earth_metals {
    color: #ff7043;
  }

  &.transition_metals {
    color: #ff9800;
  }

  &.basic_metals {
    color: #66bb6a;
  }

  &.metalloids {
    color: #26c6da;
  }

  &.amphigens,
  &.hydrogen {
    color: #42a5f5;
  }

  &.halogens {
    color: #5c6bc0;
  }

  &.lanthanoids {
    color: #7e57c2;
  }

  &.actinoids {
    color: #ab47bc;
  }

  &.clear {
    color: #78909c;
  }
`;

export const CardHeaderSymbol = styled.p`
  display: flex;
  min-height: 100%;
  width: 40%;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
`;

export const CardHeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3px;
  width: 60%;
  font-size: 1.1em;
  & > p {
    width: 100%;
    margin: 3px 0;
  }
  & > p:nth-child(2) {
    text-transform: capitalize;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardListItem = styled.li`
  display: flex;
  width: 100%;
  color: white;
  font-weight: 600;
  justify-content: space-between;
  padding: 10px 2px;
  word-break: break-all;
  font-size: 0.7em;
  &:nth-child(even) {
    background-color: #132526;
  }
  & > p {
    text-transform: capitalize;
  }
`;
