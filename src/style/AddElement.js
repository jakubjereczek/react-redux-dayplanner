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
