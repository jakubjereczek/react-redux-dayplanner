import styled from "styled-components";

export const Title = styled.h3`
    letter-spacing: 1.2px;
    text-align: center;
    width: 100%;
`

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
