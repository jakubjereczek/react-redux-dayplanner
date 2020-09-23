import styled from "styled-components";

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
`

export const Label = styled.label`
    color: ${props => props.theme.colors.main};
    font-weight: bold;
`
export const InputCorrectInfo = styled.span`
    display: block;
    border: 1px solid ${props => props.color};
    color: ${props => props.theme.colors.main};
    margin-top: 5px;
    padding: 10px;
    font-size: 0.8rem;
    text-align: center;
`