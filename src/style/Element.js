import styled from 'styled-components';

import img from './images/icons.png';

export const SingleElement = styled.li`
    display: flex;
    min-height: 80px;
    text-decoration: none;
    list-style: none;
    margin-top: 5px;
    background-color: #C4C4C4;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > div:nth-of-type(1) {
        width: 30px;
        min-height: 100%;
        background-color: ${props => props.expired ? '#E76E6E' : props.theme.colors.main};
    }

    & > div:nth-of-type(2), & > div:nth-of-type(3), & > div:nth-of-type(4) {
        padding: 5px 10px; 
        margin-top: 5px; 
    }

    & > div:nth-of-type(2) {
        flex-basis: 10%;
        font-size: 24px;
    }

    & > div:nth-of-type(3) {
        flex-direction: column;
        flex-basis: 70%;
        justify-content: flex-start;
    } 

    & > div:nth-of-type(4) {
        flex-direction: row;
        flex-basis: 20%;
    }

`

export const Text = styled.p`
    width: 100%;
    font-size: 1.15rem;
    font-weight: 500;
    color: #000;
    margin: 0;
`

export const Hour = styled.span`
    font-size: 0.8rem;
    width: 100%;
    margin: 0;
`

export const ImageInfo = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 0px;
    background-position-y: 0px;
    transition: .6s;

    &:hover {
        transform: translateY(-5px);
    }
`
export const ImageDelete = styled(ImageInfo)`
    margin-left: 10px;
    background-position-x: -40px;
`

export const ImageEdit = styled(ImageInfo)`
    margin-left: 10px;
    background-position-x: -75px;
`
