import React from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { removeElement } from '../actions/planner.actions';

import Profil from './Profil';
import { AddContainer, ButtonsRightContainer } from '../style/Containers';
import { Subtitle, Title, ButtonInside, Paragrapth } from '../style/App';
import { ImageDelete, ImageEdit } from '../style/Element'

import { save } from '../localStorage';

const Info = ({ planner, removeClick }) => {

    const history = useHistory();
    const currentlyTime = new Date().getTime();

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
                <AddContainer>
                    <Title>Elementu o podanym ID nie mamy w bazie!</Title>
                    <Link to="/"><ButtonInside>Wróć do strony głownej</ButtonInside></Link>
                </AddContainer>
            </>
        )
    } else {
        return (
            <>
                <Profil />
                <AddContainer>
                    <Title>Informacje o elemencie {id}</Title>
                    <Subtitle nomarginbottom>Treść</Subtitle>
                    <Paragrapth>{elementExist.text}</Paragrapth>
                    <Subtitle nomarginbottom>Element do wykonania do: {showDate(elementExist.expiredDate)}</Subtitle>
                    <Paragrapth>{elementExist.expiredDate < currentlyTime ? (`Wygasł czas na wykonanie zadania.`) : (
                        `posiadasz jeszcze czas na wykonanie zadania!`
                    )}</Paragrapth>
                    <ButtonsRightContainer>
                        <ImageDelete onClick={() => {
                            removeClick(id)

                            const plannerWithoutDeleted = planner.filter(task => task.id != id);

                            // Usunięcie z LocalStorage 
                            save(plannerWithoutDeleted).then(() =>
                            // Wykonanie akcji Reduxowej co zeskutkuję usunięciem elementu z Store.
                            {
                                removeClick(id)
                                history.push('/');
                            });
                        }} />
                        <ImageEdit
                        // to do

                        // onClick={true}
                        // to do
                        //() => history.push("/edit/" + id)}
                        />
                    </ButtonsRightContainer>
                    <Link to="/" ><ButtonInside>Wróć do strony głownej</ButtonInside></Link>
                </AddContainer>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        planner: state.planner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeClick: (id) => {
            dispatch(removeElement(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);

