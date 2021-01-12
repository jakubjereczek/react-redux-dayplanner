import styled from "styled-components";

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

