import React from 'react';

import Element from '../components/Element';

import { connect } from 'react-redux';
import { removeElement } from '../actions/planner.actions';
import { save } from '../localStorage';

const ElementsList = ({ planner, removeClick }) => {

    const elements = planner.map(element => (
        <Element key={element.id} {...element} f={() => removeClick(element.id)}></Element>
    ));

    save(planner);

    return (
        <div>
            <h3>Elementy {elements.length}</h3>
            {elements}
        </div>
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

