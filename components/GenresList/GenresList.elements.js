import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  margin-bottom:30px;
  `;

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 40px;
  border-radius: 5px 5px 0 0;
  color: ${props => props.dark ? "#fff" : "#000"};
  font-size: 21px;
  font-weight: bold;
  opacity: 0.9;
  background: ${props => props.dark ? "#000" : "#fff"};
`;

export const Genresitens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-wrap:wrap;
  width: 100%;
  opacity: 0.9;
  padding: 20px;
  border-radius: 5px;
  background: ${props => props.dark ? "#000" : "#fff"};
`;

export const Genreitem = styled.a`
 display: flex;
 justify-content: center;
 align-items: center;
 box-sizing: border-box;
 font-size: 12px;
 font-weight: bold;
 min-width: 100px;
 color: ${props => props.dark || props.selected ? "#fff" : "#000"};
 padding: 8px;
 text-decoration: none;
 text-transform: uppercase;
 box-shadow: 0 0 1em ${props => props.dark ? "#fff" : "#000"};
 background: ${props => props.dark ? "#fff" : "#000"};
 background: ${props => props.selected ? "blue" : "#000"};
 border-radius: 5px;
 margin: 5px;
 &:hover{
        transition: 0.2s;
        z-index:99;        
        bottom:10px;
        box-shadow: 0 0 3em blue;
        cursor: pointer;
        background: blue;
        color: #fff;
    }
`;