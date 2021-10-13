import styled from "styled-components";

export const Box = styled.a`
    display: flex;
    position: relative;
    margin: 5px;
    box-sizing: border-box;
    width: 210px;
    height: 320px;
    border-radius: 5px;
    box-shadow: 0 0 1em #000;
    background: url(${props => `https://www.themoviedb.org/t/p/w220_and_h330_face${props.post}`}) ${props => props.dark ? "#000" : "#fff"};
    &:hover{
        transition: 0.2s;
        z-index:99;        
        bottom:10px;
        width:220px;
        height:330px;
        box-shadow: 0 0 3em blue;
        border: 3px solid blue;
        cursor: pointer;
    }
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: bold;
`;