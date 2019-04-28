import React from 'react';
import BurgerIng from './BurgerIng/BurgerIng';
import Classes from './Burger.css';

const Burger = (props) => {
    let transformedIngrediants = Object.keys(props.ingredientss)
    .map(igkey => {
        return [...Array(props.ingredientss[igkey])].map((_,i) => {
            return <BurgerIng type={igkey} key={igkey + i} />
        })
    }).reduce((prev, curr) => {
        return prev.concat(curr);
    },[]);
    //console.log(transformedIngrediants.length);
    transformedIngrediants.length === 0 ? transformedIngrediants = <p className="ss">please enter a components</p> : transformedIngrediants = transformedIngrediants;
    //const a = [1, 10, 100, 1000, 10000];
    return ( 
        <div className={Classes.Burger}>
            <BurgerIng type="bread-top" />               
                { transformedIngrediants }
            <BurgerIng type="bread-bottom" />
        </div>
    );
}
export default Burger;