import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 50%;
    align-self: flex-end;
  }
`;
export const LegendHeader = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  margin: 5px;
`;
export const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  grid-template-rows: repeat(5, 1fr);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
export const GridItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
  justify-content: center;
  padding: 2px;
  color: #000;
  & > p {
    text-transform: capitalize;
  }
  &.noble_gases {
    background-color: #7e57c2;
  }

  &.alkali_metals {
    background-color: #ef5350;
  }

  &.alkali_earth_metals {
    background-color: #ff7043;
  }

  &.transition_metals {
    background-color: #ff9800;
  }

  &.basic_metals {
    background-color: #66bb6a;
  }

  &.metalloids {
    background-color: #26c6da;
  }

  &.amphigens,
  &.hydrogen {
    background-color: #42a5f5;
  }

  &.halogens {
    background-color: #5c6bc0;
  }

  &.lanthanoids {
    background-color: #7e57c2;
  }

  &.actinoids {
    background-color: #ab47bc;
  }

  &.clear {
    background-color: #78909c;
  }
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;
