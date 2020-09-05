import React from 'react';

import { ElementsContainer } from '../style/Containers';
import Element from '../components/Element';

import { List } from '../style/ElementsList';
import { Title } from '../style/App';

import { connect } from 'react-redux';
import { removeElement } from '../actions/planner.actions';
import { save } from '../localStorage';

const ElementsList = ({ planner, removeClick }) => {

    save(planner);

    let sortedPlanner = [...planner];

    sortedPlanner.sort((a, b) => {
        return a.expiredDate - b.expiredDate;
    });

    sortedPlanner = sortedPlanner.map(element => (
        <Element key={element.id} {...element} f={() => removeClick(element.id)}></Element>
    ));

    return (
        <ElementsContainer>
            <Title>Liczba elementów do wykonania w ciągu następnych 24 godzin: {sortedPlanner.length}.</Title>
            <List>
                {sortedPlanner}
            </List>
        </ElementsContainer>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ElementsList);

