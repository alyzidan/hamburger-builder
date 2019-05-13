import React from 'react';
import Classes from './BuildControles.css';
import BuildControle from './BuildControle/BuildControle';
const controles = [
    {label:'Salade', type:'salade'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]
const BuildControles = (props) => (
    <div className={Classes.BuildControls}>
        <p className="aa"> current Price is {props.price.toFixed(2)}</p>
            {controles.map((i) => <BuildControle  
                                    key={i.label}
                                    label={i.label} 
                                    subtract = {() => props.ingredsubtraction(i.type)}
                                    added={() => props.ingredAddition(i.type)} 
                                    disable={props.disabled[i.type]}/> )} 
                                    <button className={Classes.OrderButton}>ORDER NOW</button>
    </div>
)
export default BuildControles;