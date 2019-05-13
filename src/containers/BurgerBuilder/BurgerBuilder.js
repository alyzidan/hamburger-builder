import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControles from '../../components/Burger/BuildControles/BuildControles';
const INGREDIANT_PRICES = {
    salade: 1.5,
    bacon: 1.3,
    meat: 1.5,
    cheese: 1.7,
}
class BurgerBuilder extends Component {
    
    state = {
        ingredients : {
            salade : 0,
            bacon : 0,
            meat:0,
            cheese:0,
        },
        price : 4,
        purchasable: false
    }
    updatePurchasable () {
        const ingredients = {
            ...this.state.ingredients
        }    
        const sum = Object.keys(ingredients).map((i) => ingredients(i))
        console.log(sum);
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
        //console.log(finalNewPrice);
        this.setState({price : finalNewPrice, ingredients : oraiginalIngredients});
    }
    removeIngrediantHandler = (ing) => {
        const oldCount = this.state.ingredients[ing];
        if (oldCount <= 0) {
            return; 
        }
        const removeIng = oldCount -1 ;
        const oraiginalIngredients = {
            ...this.state.ingredients
        }
        const previousePrice = INGREDIANT_PRICES[ing];
        oraiginalIngredients[ing] = removeIng ;
        const oldPrice=this.state.price;
        const FinalPrice = previousePrice - oldPrice;
        //console.log(FinalPrice);
        this.setState({price:FinalPrice, ingredients:oraiginalIngredients})

    }
    render(){
        const priceRef = {
            ...INGREDIANT_PRICES
        }
        const disabledInfo ={
            ...this.state.ingredients
        };
        console.log(disabledInfo)
        for (const key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log(disabledInfo);
        return(
            <Aux>
                <Burger ingredientss={this.state.ingredients}></Burger>
                <BuildControles 
                price={this.state.price} 
                disabled={disabledInfo} 
                ingredAddition={this.addIngrediantHandler} 
                ingredsubtraction={this.removeIngrediantHandler}/>
                
            </Aux> 
        );
    }
}

export default BurgerBuilder;