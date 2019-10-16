import React, { Component } from 'react'
import TacoCard from '../tacos/TacoCard'
import TacoManager from '../../modules/TacoManager';

class TacoList extends Component {

    state = {
        tacos: []
    }
componentDidMount(){
    TacoManager.getAllTacos()
    .then((tacos)=> {
        this.setState({
            tacos: tacos
        })
    })
}

    render() {



        return (
            <>
    {this.state.tacos.map(taco => 
                <TacoCard key={taco.id} taco={taco} userId={this.props.userId} getOrder={this.props.order} />
    )}
            </>
        )
    }
} 
export default TacoList

