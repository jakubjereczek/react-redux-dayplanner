import React from 'react';
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';

import { InfoContainer } from '../style/Containers';
import { Subtitle, Title, ButtonInside } from '../style/App';

const Info = ({ planner }) => {

    // index in array
    let { id } = useParams();

    // find element 
    const elementExist = planner.find(element => element.id === Number(id));
    console.log(elementExist)

    const showDate = (d) => {
        const date = new Date(d);
        const hours = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}`;
        const minutes = `${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;
        return `${date.toLocaleDateString()} ${hours}:${minutes}`
    }
    if (elementExist === undefined) {
        return (
            <InfoContainer>
                <Title>Elementu o podanym ID nie mamy w bazie!</Title>
                <Link to="/"><ButtonInside>Wróć do strony głownej</ButtonInside></Link>
            </InfoContainer>
        )
    }
    return (
        <InfoContainer>
            <Title>Informacje o elemencie {id}</Title>
            <Subtitle>Treść</Subtitle>
            <p>{elementExist.text}</p>
            <Subtitle>Element do wykonania do: </Subtitle>
            <p>{showDate(elementExist.expiredDate)}</p>
            <Subtitle>Element zostanie automatycznie usunięty (24 godziny po dodaniu): </Subtitle>
            <p>{showDate(elementExist.createdDate + (3600 * 1000 * 24))}</p>
            <Link to="/" ><ButtonInside>Wróć do strony głownej</ButtonInside></Link>
        </InfoContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        planner: state.planner
    }
}

export default connect(mapStateToProps)(Info);