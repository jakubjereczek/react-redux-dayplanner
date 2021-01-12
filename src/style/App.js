import styled from "styled-components";

export const theme = {
    colors: {
        main: "#19a56f",
    },
    width: '800',
}

export const Title = styled.h3`
    letter-spacing: 1.2px;
    text-align: center;
    width: 100%;
`

export const Subtitle = styled.h4`
    letter-spacing: 1.2px;
    margin-bottom: ${props => (props.nomarginbottom ? `0px` : '10px')};
`

export const SubtitleCenter = styled.p`
    letter-spacing: 1.05px;
    text-align: center;
    margin: 0;
    margin-top: 5px;
    
    & > span {
        font-weight: 500;
        color: ${props => props.theme.colors.main};
    }
`

export const SubtitleOther = styled.p`
    letter-spacing: 1.05px;
    margin: 0;
    word-wrap: break-word;
    & > span {
        font-weight: 500;
    }
`;

export const Paragrapth = styled.p`
    margin: 0;
    & > span {
        font-weight: 500;
        color: ${props => props.theme.colors.main};
    }
`

export const Button = styled.button`
    display: block;
    margin-left: calc(100% - 140px);
    background: ${props => props.theme.colors.main};
    font-size: 0.8rem;
    padding: 10px 15px;
    width: 140px;
    border: none;
    color: #fff;
    margin-top: 5px;
    
`

export const ButtonInside = styled(Button)`
    background: #fff;
    /* color: ${props => props.theme.colors.main};
    border: 1px solid ${props => props.theme.colors.main}; */
    color: #000;
    border: 1px solid #000;
    width: 100%;
    min-width: 60px;
    margin-top: 2px;
    margin-left: 0;
    transition: .3s;
    &:hover {
        background: ${props => props.theme.colors.main};
        color: #fff;
    }
`

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
