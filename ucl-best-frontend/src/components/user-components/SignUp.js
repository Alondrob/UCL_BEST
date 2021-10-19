import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userAction'

 class SignUp extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password_confirmation: ''
        }
    }
    render() {
        
        const onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value  
            })
        }

        const onSubmit = (e) => {
            e.preventDefault()
            this.props.createUser(this.state)
            
        }
        return (
            <form onSubmit={onSubmit}>
                <label> Email</label>
                <input name="email" onChange={onChange} value={this.state.email} type="email"/>
                <label> Password </label>
                <input name="password" onChange={onChange} value={this.state.password} type="password" />
                <label> Confirm Password </label>
                <input name="password_confirmation" onChange={onChange} value={this.state.password_confirmation} type="password" />
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)