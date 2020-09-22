import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  flex-wrap: wrap;
  background-color: #132526;
  border: 15px solid #0e1a1b;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const GridTemplateDesktop = styled.ul`
  display: none;
  flex: 0.6;
  min-height: 100%;
  margin: 5px;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #132526;
  @media (min-width: 1024px) {
    display: grid;
  }
`;

export const GridTemplateMobile = styled.ul`
  display: grid;
  min-height: 100%;
  margin: 10px;
  padding: 5px;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(18, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #132526;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.disabled ? "transparent" : "#" + props.color)};
  align-items: center;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  &.active {
    background-color: #929292;
  }
  & > p {
    width: 100%;
    font-size: 10px;
    padding: 1px;
  }
  & > p:nth-child(2) {
    text-align: center;
    font-size: 25px;
  }
  & > p:nth-child(3) {
    display: none;
    text-align: center;
  }
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

  @media (min-width: 600px) {
    & p:nth-child(3) {
      display: block;
    }
  }
  @media (min-width: 1024px) {
    & > p {
      font-size: 8px;
      padding: 1px;
    }
    & > p:nth-child(2) {
      font-size: 20px;
    }
    & > p:nth-child(3) {
      font-size: 7.5px;
    }
  }
  @media (min-width: 1250px) {
    & > p {
      font-size: 10px;
      padding: 1px;
    }
    & > p:nth-child(2) {
      font-size: 25px;
    }
    & > p:nth-child(3) {
      font-size: 10px;
    }
  }
`;
