import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Section = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex:1;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.dark ? "#000" : "#fff"};
  opacity: 0.9;
`;

export const Content = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  padding: 40px;
  margin-top: 100px;
`;

export const Leftcol = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const Rightcol = styled.div`
  flex: 3;
  height: auto;
  
`;

export const Cover = styled.img`
  border: 3px solid ${props => props.dark ? "#fff" : "#000"};
  min-width: 320px;
  width: 100%;
  padding: 2px;
  margin: 25px;
  background: gray;
  box-shadow: 0 0 1em ${props => props.dark ? "#fff" : "#000"};
`;

export const Title = styled.h1`
  display: flex;
  float: left;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  height: auto;
  color: ${props => props.dark ? "#fff" : "#000"};
  font-size: 50px;
`;

export const Year = styled.span`
  font-size: 40px;
  font-weight: normal;
  color: #555;
`;

export const Genres = styled.span`
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  min-width: 80px;
  height: 15px;
  border-radius: 5px;
  padding: 15px;
  margin:5px;
  color: ${props => props.dark ? "#000" : "#fff"};
  background: ${props => props.dark ? "#fff" : "#000"};
`;

export const OverviewTitle = styled.h2`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  margin-top: 140px;
  color: ${props => props.dark ? "#fff" : "#000"};
`;

export const OverviewText = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  font-size: 21px;
  font-weight: lighter;
  width: 100%;
  color: ${props => props.dark ? "#fff" : "#000"};
`;