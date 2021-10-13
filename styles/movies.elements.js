import styled from 'styled-components';

export const Page = styled.div`
  position: relative;
  flex-wrap:wrap;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const Section = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${props => props.dark ? "#000" : "#fff"};
  opacity: 0.9;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap:wrap;
  position: absolute;
  height: auto;
  width: 100%;
  padding: 40px;
  margin-top: 100px;
  display: flex;
  color: #fff;
  background: blue;
`;

export const Cover = styled.img`
  border: 3px solid ${props => props.dark ? "#fff" : "#000"};
  width: 220px;
  height: 320px;
  padding: 2px;
  margin: 15px;
`;

export const Details = styled.div`
  display: flex;
  flex-wrap:wrap;
  background: green;
`;

export const Title = styled.h1`
  float: left;
  width: 100%;
  color: ${props => props.dark ? "#fff" : "#000"};
  font-size: 50px;
  background: red;
`;

export const Year = styled.span`
  font-size: 40px;
  font-weight: normal;
  color: #555;
`;

export const Genres = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  min-width: 80px;
  height: 15px;
  border-radius: 5px;
  padding: 15px;
  color: ${props => props.dark ? "#000" : "#fff"};
  background: ${props => props.dark ? "#fff" : "#000"};
`;

export const Overview = styled.p``;