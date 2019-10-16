import React, { Component } from 'react';
import TacoManager from '../../modules/TacoManager';



class TacoCard extends Component {
    state = {

    }

    handleClick = () => {
        console.log("what are the props of this component", this.props)
        const newOrderObj = {
            userId: this.props.userId,
            tacoId: this.props.taco.id
        }
        TacoManager.orderTaco(newOrderObj)
        .then(() => {
            this.props.getOrders();
            //call getAllTacos from the OrderView
        })
    }
    render() {

        return (
            <>
                <h2>{this.props.taco.name}</h2>
                <button type="button" onClick={this.handleClick}>Order Me</button>
            </>
        )
    }
}

export default TacoCard;