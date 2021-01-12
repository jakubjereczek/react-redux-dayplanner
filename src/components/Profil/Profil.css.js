import styled from "styled-components";

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

export const ProfilContainer = styled.div`
    background: white;
    box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.2);
    padding: 10px;
    margin-top: 10px;

    position: relative;
    display: flex;
    flex-direction: row;
    height: 100px;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    & > div {
        flex-basis: 33%;
        width: 33%;
    }
    
    @media(max-width: 768px) {
        /* flex-direction: column; */
        height: auto;
        margin-top: 10px;
        & > div:nth-child(1) {
            display: none;
        }
        & > div {
            flex-basis: 45%;
            width: 45%;
        }

    }
   
`