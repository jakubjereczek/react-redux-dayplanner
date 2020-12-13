import styled from "styled-components";

export const Input = styled.input`
    box-sizing: border-box;
    display: block;
    width: calc(100% - 15px);
    height: 40px;
    margin-left: 15px; 
    padding: 10px;
    border: none;
`
export const InputBorder = styled.div`
    position: relative;
    background-color: #C4C4C4;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    margin-bottom: ${props => (props.textarea ? `30px` : '15px')};
  
`
export const InputError = styled.span`
    display: block;
    background-color: #E76E6E;
    color: #fff;
    font-size: 12px;
    line-height: 12px;
    padding: 2px 5px;
    margin-left: 15px;
`

export const Textarea = styled.textarea`
    display: block;
    width: calc(100% - 35px);
    margin-left: 15px; 
    height: 100px;
    padding: 10px;
    color: #000;
    resize: none;
    border: 0px;
    font-family: inherit;
`

export const TextareaBorder = styled.div`
    width: calc(100% - 20px);
    background-color: ${props => props.theme.colors.main};
    padding: 10px;

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