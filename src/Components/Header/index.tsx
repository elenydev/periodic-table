import React from "react";
import styled from "styled-components";

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #193132;
  color: white;
  padding: 10px 10px;
  font-weight: 600;
  font-size: 0.7em;
  .MuiIconButton-root {
    color: #fff;
  }
  .MuiSvgIcon-root {
    font-size: 2rem;
  }
`;
const Header = (): JSX.Element => {
  return (
    <HeaderElement>
      <h1>Periodic Table</h1>
    </HeaderElement>
  );
};

export default Header;
