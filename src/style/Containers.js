import styled from "styled-components";

export const AddContainer = styled.div`
    background: white;
    box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.2);
    padding: 10px;
    margin-top: 10px;
`

export const ElementsContainer = styled(AddContainer)`
    padding: 10px 0; 
`;

export const DividedInsideContainer = styled.div`
    display: flex;
    flex-direction: row;

    & > div {
        position: relative;
        flex-basis: 50%;
        height: auto;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
export const ProfilContainer = styled(AddContainer)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100px;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    & > div {
        flex-basis: 33%;
        width: 33%;
    }
    
    @media(max-width: 768px) {
        /* flex-direction: column; */
        height: auto;
        & > div:nth-child(1) {
            display: none;
        }
        & > div {
            flex-basis: 45%;
            width: 45%;
        }

    }
   
`

export const ButtonsRightContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`
