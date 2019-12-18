import React, {Component} from 'react';
import AuthModal from './AuthModal';
import {connect} from 'react-redux';
import axios from 'axios';

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        axios.get(`/api/cart/${this.props.user.customer_order_id}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.cart)
        return(
            <div>
                {this.props.user.email
                ? (
                <div>Cart</div>
                ) : (
                    <AuthModal />
                )}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(Cart);