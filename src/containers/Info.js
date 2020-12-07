import React from 'react';
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';

import Profil from './Profil';
import { InfoContainer } from '../style/Containers';
import { Subtitle, Title, ButtonInside } from '../style/App';

const Info = ({ planner }) => {

    const actualTime = new Date().getTime();

    // index in array
    let { id } = useParams();

    // find element 
    const elementExist = planner.find(element => element.id === Number(id));

    const showDate = (d) => {
        const date = new Date(d);
        const hours = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}`;
        const minutes = `${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;
        return `${date.toLocaleDateString()} ${hours}:${minutes}`
    }
    console.log("ELEMENT", elementExist, planner)
    if (elementExist === undefined) {
        return (
            <>
                <Profil />
                <InfoContainer>
                    <Title>Elementu o podanym ID nie mamy w bazie!</Title>
                    <Link to="/"><ButtonInside>Wróć do strony głownej</ButtonInside></Link>
                </InfoContainer>
            </>
        )
    } else {
        return (
            <>
                <Profil />
                <InfoContainer>
                    <Title>Informacje o elemencie {id}</Title>
                    <Subtitle>Treść</Subtitle>
                    <p>{elementExist.text}</p>
                    <Subtitle>Element do wykonania do: </Subtitle>
                    <p>{showDate(elementExist.expiredDate)}</p>

                    {elementExist.expiredDate < actualTime ? (
                        <Subtitle>Wygasł czas na wykonanie zadania!</Subtitle>
                    ) : (
                            <Subtitle>Posiadasz jeszcze czas na wykonanie zadania!</Subtitle>
                        )}
                    <Link to="/" ><ButtonInside>Wróć do strony głownej</ButtonInside></Link>
                </InfoContainer>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        planner: state.planner
    }
}

export default connect(mapStateToProps)(Info);