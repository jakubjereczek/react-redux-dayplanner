import styled from "styled-components";

export const theme = {
    colors: {
        main: "#19a56f",
    }
}

export const Title = styled.h3`
    letter-spacing: 1.2px;
    text-align: center;
    width: 100%;
`

export const Button = styled.button`
    display: block;
    margin-left: calc(100% - 120px);
    background: ${props => props.theme.colors.main};
    padding: 10px 15px;
    width: 120px;
    border: none;
    color: #fff;
`

export const ButtonInside = styled(Button)`
    background: #fff;
    color: ${props => props.theme.colors.main};
    border: 1px solid ${props => props.theme.colors.main};
    width: 100%;
    min-width: 60px;
    margin-top: 2px;
    margin-left: 0;
    `

export const Main = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
`

export const AppContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    font-size: 16px;
    background: ${props => props.theme.colors.main};
`
