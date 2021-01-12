import React, { useMemo } from 'react';

import Element from './Element';

import Container from 'components/Container';

import Text from 'components/Text';

import { connect } from 'react-redux';
import { removeElement } from 'actions/planner.actions';
import { save } from 'localStorage';

const ElementsList = ({ planner, removeClick }) => {

    save(planner);

    let sortedPlanner = [...planner];

    sortedPlanner.sort((a, b) => {
        return a.expiredDate - b.expiredDate;
    });

    const currentlyTime = new Date().getTime();

    let elementsToDo = useMemo(() => sortedPlanner.filter(task => task.expiredDate > currentlyTime), [sortedPlanner, currentlyTime]);
    let elementsExpired = useMemo(() => sortedPlanner.filter(task => task.expiredDate <= currentlyTime), [sortedPlanner, currentlyTime]);

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
        <Container type="elements">
            <Text type="title">Liczba elementów do wykonania: {sortedPlanner.length}.</Text>
            <div>
                {elementsToDo}
                {elementsExpired}
            </div>
        </Container>
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

