import styled from "styled-components";

export const DefaultContainer = styled.div`
    background: white;
    box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.2);
    padding: 10px;
    margin-top: 10px;
`

export const ButtonsRightContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

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

export const ElementsContainer = styled(DefaultContainer)`
    padding: 10px 0; 
`;

