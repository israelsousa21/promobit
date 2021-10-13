import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: url(${props => props.bgcover ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.bgcover}` : `https://www.digiseller.ru/preview/727651/p1_2365110_869f10ad.jpg`}) no-repeat ${props => props.dark ? "#000" : "#fff"};
    background-size: cover;
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
