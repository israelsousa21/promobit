import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: url(${'https://www.worldatlas.com/r/w1200/upload/f0/ee/61/theater.jpg'});
    background-color: ${props => props.dark ? "#000" : "#fff"};
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
      padding-right: 30px;
      padding-left: 30px;
  }
`;

export default GlobalStyle;
