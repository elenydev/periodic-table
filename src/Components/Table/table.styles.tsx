import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px;
  min-height: 100%;
  background-color: #0e1a1b;
`;

export const GridTemplate = styled.ul`
  display: grid;
  width: 100%;
  min-height: 100%;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #132526;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(70px, 1fr));
    gap: 5px 12px;
  }
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.disabled ? "transparent" : "#" + props.color)};
  align-items: center;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  & > p {
    width: 100%;
    font-size: 0.6em;
    padding: 3px;
  }
  & > p:nth-child(2) {
    width: 100%;
    text-align: center;
    font-size: 2em;
  }
  & > p:nth-child(3) {
    text-align: center;
    font-size: 0.7em;
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
  @media (max-width: 1250px) {
    display: ${(props) => (props.disabled ? "none" : "flex")};
    & > p {
      font-size: 0.6em;
      padding: 3px;
    }
    & > p:nth-child(2) {
      font-size: 1.5em;
    }
    & > p:nth-child(3) {
      font-size: 0.6em;
    }
  }
  @media (max-width: 600px) {
    & p:nth-child(3) {
      display: none;
    }
  }
`;
