import React, {Component} from 'react';

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }

    render(){
        return(
            <div>Cart Component</div>
        )
    }
}

export default Cart;