import styled from 'styled-components';

import img from './images/toggle.png';

export const Component = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 22.8px;
    height: 36.8px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: ${props => props.dark ? '-22.8px' : '0px'};
    background-position-y: 0px;
`;