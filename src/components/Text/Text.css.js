import styled from 'styled-components';

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
