
import React, { Component } from 'react';
import Classes from './BurgerIng.css'
class BurgerIng extends Component{
    render(){
        let ing = null;
    if (this.props.type === 'bread-bottom') {
        ing = <div className={Classes.BreadBottom}></div>  
    } else if (this.props.type === 'bread-top') {
        ing = (
            <div className={Classes.BreadTop}>
                <div className={Classes.Seeds1}></div>
                <div className={Classes.Seeds2}></div>
            </div>
        )
    } else if (this.props.type === 'bacon') {
        ing = <div className={Classes.Bacon}></div>
    } else if (this.props.type === 'meat'){
        ing = <div className={Classes.Meat}></div>
    } else if (this.props.type === 'cheese'){
        ing = <div className={Classes.Cheese}></div>
    } else if (this.props.type === 'salade') {
        ing = <div className={Classes.Salad}></div>
    } else {
        ing = null;
    }
    return ing;  
    }
}


export default BurgerIng;