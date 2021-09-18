import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

export default function TopBar(props){
    
    return (
            <Container>
                <Blurbar dark={props.dark}/>
                <Content>
                        <Logo dark={props.dark}>
                            [logo]
                        </Logo>
                        <ToggleButton onClick={props.toggle}>
                            { props.dark ? <FaSun color={'#fff'} size={20} /> : <FaMoon color={'#000'} size={20} /> }
                        </ToggleButton>
                    </Content>
                </Container>
    )
}

const Container = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const Blurbar = styled.div `
    position: absolue;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    opacity: 0.5;
    width: 100%;
    height: 60px;
    box-shadow: 0 0 0 5px ${props => props.dark ? "#000" : "#fff"};
    background: ${props => props.dark ? "#000" : "#fff"};
`;

const Content = styled.div `
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;    
`;

const Logo = styled.div `
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    align-itens:center;
    text-align:center;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    color: ${props => props.dark ? "#fff" : "#000"};
`;
const ToggleButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 20px;
  filter: blur(0px);
    -webkit-filter: blur(0px);
`;
