import styled from "styled-components";

import img from './images/tasks.png';

export const LeftContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 240px;
    max-height: 240px;
    @media(max-width: 768px) {
        top: 0;
        min-height: 340px;
    }
`

export const Image = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
    background-image: url(${img});
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: -25px;
    /* width: ${props => props.theme.width / 2}px; */
    min-height: ${props => props.theme.width / 2 - 100}px; 
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media(max-width: 768px) {
        top: 0px;
    }

`
export const TitleLogo = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: 26px;
    margin-top: 10px;
`
export const TitleLogoBold = styled.span`
    color: ${props => props.theme.colors.text};
    display: block;
    font-weight: bold;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    & > p {
        font-size: 36px;
        height: 100%;
        margin: 10px;
        & > span {
            font-weight: 500;
        }
    }
`

export const RightContainer = styled.div`
    margin: 20px;
`

