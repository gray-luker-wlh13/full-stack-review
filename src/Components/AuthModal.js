import React, {useState} from 'react';
import {getUser} from '../redux/reducer';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

const AuthModal = (props) => {
    const [emailInput, setEmailInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const login = () => {
        axios.post('/auth/login', {email: emailInput, password: passInput}).then(res => {
            props.getUser(res.data)
        })
    };
    
    const register = () => {
        axios.post('/auth/register', {email: emailInput, password: passInput}).then(res => {
            props.getUser(res.data)
        })
    };
    

    return (
        <div className='auth-modal'>
            <input 
                value={emailInput}
                placeholder='Email'
                onChange={(e) => setEmailInput(e.target.value)}
            />
            <input 
                type='password'
                value={passInput}
                placeholder='Password'
                onChange={(e) => setPassInput(e.target.value)}
            />
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
            {props.location.pathname === '/'
            ? (
                <>
                    <button onClick={props.toggleFn}>Cancel</button>
                </>
            ): null}
            
        </div>
    )
}

export default withRouter(connect(null, {getUser})(AuthModal));