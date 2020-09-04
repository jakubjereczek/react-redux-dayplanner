import React from 'react';

import { ElementsContainer } from '../style/Containers';
import Element from '../components/Element';

import { Title, List } from '../style/ElementsList';

import { connect } from 'react-redux';
import { removeElement } from '../actions/planner.actions';
import { save } from '../localStorage';

const ElementsList = ({ planner, removeClick }) => {

    let elements = planner.map(element => (
        <Element key={element.id} {...element} f={() => removeClick(element.id)}></Element>
    ));

    save(planner);
    return (
        <ElementsContainer>
            <Title>Liczba elementów do wykonania w ciągu następnych 24 godzin: {elements.length}.</Title>
            <List>
                {elements}
            </List>
        </ElementsContainer>
    )
}

const mapStateToprops = (state) => {
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

export default connect(mapStateToprops, mapDispatchToProps)(ElementsList);

