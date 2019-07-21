import React from "react";
import {connect} from "react-redux";
import {setTechnology} from './actions';

const ButtonGroup = ({technologies, setTechnology}) => {

    function dispatchBtnAction(e) {
        const technology = e.target.dataset.technology;
        setTechnology(technology);
    }

    return (
        <div>
            {technologies.map((technology, i) => (
                <button
                    data-technology={technology}
                    key={`btn-${i}`}
                    className="hello-btn"
                    onClick={dispatchBtnAction}
                >
                    {technology}
                </button>
            ))}
        </div>
    );

};

export default connect(
    null,
    {setTechnology}
)(ButtonGroup);
