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
    <div className={Classes.BuildControle}>
        
         {controles.map((i) => <BuildControle  
                                    key={i.label} 
                                    label={i.label} 
                                    added={() => props.ingredAddition(i.type)} /> )}
    </div>
)
export default BuildControles;