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

    const actualTime = new Date().getTime();

    let elementsToDo = sortedPlanner.filter(task => task.expiredDate > actualTime)
    let elementsExpired = sortedPlanner.filter(task => task.expiredDate <= actualTime);

    // index = iteracja
    let i = 0;
    elementsToDo = elementsToDo.map((element) => {
        i += 1;
        return (<Element key={element.id} {...element} i={i} f={() => removeClick(element.id)}></Element>)
    });
    elementsExpired = elementsExpired.map((element) => {
        i += 1;
        return (
            <Element expired key={element.id} {...element} i={i} f={() => removeClick(element.id)}></Element>)
    });

    return (
        <ElementsContainer>
            <Title>Liczba elementów do wykonania: {sortedPlanner.length}.</Title>
            <List>
                {elementsToDo}
                {elementsExpired}
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

