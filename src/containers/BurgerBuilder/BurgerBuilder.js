import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControles from '../../components/Burger/BuildControles/BuildControles';
const INGREDIANT_PRICES = {
    salad: .5,
    cheese: .3,
    meat: 1.5,
    bacon: .7,
}
class BurgerBuilder extends Component {
    
    state = {
        ingredients : {
            salade : 1,
            bacon : 3,
            meat:2,
            cheese:1,
        },
        price : 4
    }
    addIngrediantHandler = (ing) => {
        const oldCount = this.state.ingredients[ing];
        const addNewCount = oldCount+1; 
        const oraiginalIngredients = {
            ...this.state.ingredients
        }
        oraiginalIngredients[ing]= addNewCount;
        const priceAddition = INGREDIANT_PRICES[ing];
        const oldPrice = this.state.price;
        const finalNewPrice = oldPrice + priceAddition;
        this.setState({price : finalNewPrice,ingredients : oraiginalIngredients});
    }
    removeIngrediantHandler = (ing) => {
        const oldCount = this.state.ingredients[ing];
        const removeIng = oldCount -1 ;
        const oraiginalIngredients = {
            ...this.state.ingredients
        }
        const previousePrice = INGREDIANT_PRICES[ing];
        oraiginalIngredients[ing] = removeIng ;
        const oldPrice=this.state.price;
        const FinalPrice = previousePrice - oldPrice;
        //this.setState({})

    }
    render(){
        return(
            <Aux>
                <Burger ingredientss={this.state.ingredients}></Burger>
                <BuildControles ingredAddition={this.addIngrediantHandler} ingredsubtraction={this.removeIngrediantHandler}/>
            </Aux> 
        );
    }
}

export default BurgerBuilder;