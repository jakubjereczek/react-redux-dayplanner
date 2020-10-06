import styled from 'styled-components';

export const SingleElement = styled.li`
    display: flex;
    align-items: flex-start;

    background: ${props => props.expired ? "tomato" : props.theme.colors.main};
    text-decoration: none;
    list-style: none;
    padding: 5px 10px;
    margin-top: 5px;
`

export const Text = styled.p`
    flex-basis: 75%;
    display: inline-block;
    padding: 0px 10px;
    /* overflow-wrap: break-word;
    word-wrap: break-word; */
    font-size: 1.15rem;
    color: #fff;
`

export const Hour = styled.span`
    flex-basis: 10%;
    align-self: center;
    text-align: center;
`

export const Manage = styled.div`
    flex-basis: 15%;
    min-width: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`

