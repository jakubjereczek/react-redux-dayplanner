import styled from "styled-components";
import { DefaultContainer } from 'components/Container/Container.css';

import img from './images/profil.png';

export const Image = styled.div`
    position: absolute;
    top: -50px;
    background-image: url(${img});
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: -10px;
    width: 250px;
    height: 210px; 
`

export const ProfilContainer = styled(DefaultContainer)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 110px;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    & > div {
        flex-basis: 33%;
        width: 33%;
    }

    & > div:nth-child(3) {
            align-self: flex-end;
    }

    
    @media(max-width: 768px) {
        /* flex-direction: column; */
        height: auto;
        margin-top: 10px;
        padding-top: 42px;
        & > div:nth-child(1) {
            display: none;
        }
        & > div {
            flex-basis: 45%;
            width: 45%;
        }
    }
   
`