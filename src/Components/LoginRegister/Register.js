import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/LoginRegister.css';


export default class Register extends Component {
    
    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            phone: this.phone,
            email: this.email,
            address: this.address,
            password: this.password,
            confirmPassword: this.confirmPassword,
            track: this.track
        };

        axios.post('/user/sign-up', data).then(
            res => {
                this.setState({
                    message: res.data.message
                })
            }
        ).catch(
            err => {
                this.setState({
                    message: err.message
                })
            }
        )
    };
    
    render() {

        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
       
        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="register-wrapper">
                    {error}

                    <h3 className="login-register-header">Register</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" 
                        id="firstname" 
                        placeholder='First Name' 
                        onChange={e => this.firstName = e.target.value} 
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" 
                        id="lastname" 
                        placeholder='Last Name'  
                        onChange={e => this.lastName = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Middle Name</label>
                        <input type="text" 
                        id="middlename"
                        placeholder='Middle Name' 
                        onChange={e => this.middleName = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" 
                        id="phone" 
                        placeholder='+234-703-567-1234' 
                        onChange={e => this.phone = e.target.value}
                        required/>
                    </div>
        
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" 
                        id="email" 
                        placeholder='circleafrica@gmail.com' 
                        onChange={e => this.email = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" 
                        id="address" 
                        placeholder='Your residential address'  
                        onChange={e => this.address = e.target.value}
                        required/>
                    </div>
        
                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='Password' 
                        onChange={e => this.password = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type='password' 
                        id='passwordconfirm'
                        placeholder='Confirm Password' 
                        onChange={e => this.confirmPassword = e.target.value}
                        required/>
                    </div>
        
                    <div className="form-group radio-input-group" onChange={e => this.track = e.target.value}>
                        <input className="farmer-radio" 
                        type="radio" 
                        value="farmer"
                        id="farmer"
                        name="track" /> farmer
        
                        <input className="investor-radio" type="radio"
                        value="investor" 
                        id="investor"
                        name="track" /> investor
        
                        <input className="consultant-radio" type="radio"
                        value="consultant"
                        id="consultant"
                        name="track" /> consultant
                    </div>
        
                    <div className="form-group">
                        <input type='submit' 
                        value='Create' 
                        className='submit' 
                        />
                    </div>
                </div>
            </form>
        )
    }
}
