import styled from 'styled-components';
import {Container} from '../../styles/globalStyles';

export const Section = styled(Container)`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    z-index: 9999;
    padding: 0;
            
    ${Container}
`;

export const Blurbar = styled.div `
    position: fixed;
    width: 100%;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    opacity: 0.9;
    min-height:100px;        
    box-shadow: 0 0 0 5px ${props => props.dark ? "#000" : "#fff"};
    background: ${props => props.dark ? "#000" : "#fff"};
`;

export const Content = styled.nav `
    z-index:9999;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top:20px;
`;

export const Logo = styled.div `
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    filter: blur(1px);
    -webkit-filter: blur(0px);
    color: ${props => props.dark ? "#fff" : "#000"};
`;
export const ToggleButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 15px;
  filter: blur(0px);
    -webkit-filter: blur(0px);
    cursor: pointer;
`;