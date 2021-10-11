import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    position: relative;
    margin: 5px;
    box-sizing: border-box;
    width: 210px;
    height: 316px;
    border-radius: 5px;
    box-shadow: 0 0 1em #000;
    background: url(${'https://www.themoviedb.org/t/p/w220_and_h330_face/lNzCFguC8wEyJWP89ewQYK8d2nJ.jpg'}) ${props => props.dark ? "#000" : "#fff"};
    &:hover{
        width: 220px;
        height: 326px;
        cursor: pointer;
    }
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: bold;
`;