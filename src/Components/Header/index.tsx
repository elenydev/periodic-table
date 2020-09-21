import React from "react";
import styled from "styled-components";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
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
function Header(): JSX.Element {
  return (
    <HeaderElement>
      <IconButton>
        {/*<ArrowBackIcon />*/}
        {/* cos mi ten arrowBack nie dziala, zakomentowalem */}
      </IconButton>
      <h1>Periodic Table</h1>
    </HeaderElement>
  );
}

export default Header;
