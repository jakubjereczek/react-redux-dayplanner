import styled from "styled-components";

export const Main = styled.div`
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     width: 100%;
     min-width: 320px;
     max-width: ${props => props.theme.width}px;

 `

export const AppContainer = styled.div`
     min-height: 100vh;
     min-width: 320px;
     height: 100%;
     font-size: 16px;
     background: ${props => props.theme.colors.main};
 `