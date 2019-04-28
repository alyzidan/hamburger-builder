import React from 'react';
import Classes from './BuildControle.css'
const BuildControle = (props) => (
    <div className={Classes.BuildControl}>
        <div className={Classes.Label}>{props.label}</div>
        <button className={Classes.Less}>
            Less
        </button>
        <button className={Classes.More} onClick={props.added}>
            More
        </button>
    </div>
)

export default BuildControle;