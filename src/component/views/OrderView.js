import React, { Component } from 'react';
import TacoList from "../tacos/TacoList";
import OrderList from "../orders/OrderList";
import TacoManager from '../../modules/TacoManager';

class OrderView extends Component {
    state = {
        orders: []
    }

    getOrders = () => {
        TacoManager.getAllOrders(this.props.userId).then((results) => {
            this.setState({
                orders: results
            })
        })
    }    
    componentDidMount() {
            this.getOrders();
    }

        render() {

            return (
                <>
                    <TacoList userId={this.props.userId} />
                    <hr />
                    <OrderList orders={this.state.orders} getOrders={this.getOrders} />
                </>
            )
        }
    

}    export default OrderView;