import React from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { removeElement } from 'actions/planner.actions';

import Container from 'components/Container';

import Text from 'components/Text';
import { ImageDelete, ImageEdit } from '../Main/components/Elements.css'

import Button from 'components/Button';

import { save } from 'localStorage';

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

    if (elementExist === undefined) {
        return (
            <>
                <Container>
                    <Text type="title">Elementu o podanym ID nie mamy w bazie!</Text>
                    <Button type="inside" to="/">Wróć do strony głownej</Button>
                </Container>
            </>
        )
    } else {
        return (
            <>
                <Container>
                    <Text type="title">Informacje o elemencie {id}</Text>
                    <Text type="subtitle" nomarginbottom>Treść</Text>
                    <Text type="paragrapth">{elementExist.text}</Text>
                    <Text type="subtitle" nomarginbottom>Element do wykonania do: {showDate(elementExist.expiredDate)}</Text>
                    <Text type="paragrapth">{elementExist.expiredDate < currentlyTime ? (`Wygasł czas na wykonanie zadania.`) : (
                        `posiadasz jeszcze czas na wykonanie zadania!`
                    )}</Text>
                    <Container type="buttonsRight">
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
                    </Container>
                    <Button type="inside" to="/">Wróć do strony głownej</Button>
                </Container>
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

