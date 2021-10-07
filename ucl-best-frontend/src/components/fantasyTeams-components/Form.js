import React, { Component } from 'react'
import { createFantasyTeam } from '../actions/fantasyTeamAction'
import { connect } from 'react-redux'
import './FantasyTeam.css'

export class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            nickname: "",
            color: "",
            country: ""
        }
    }
    render() {
        console.log('Form.js', this.props)
        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        console.log('state', this.state)
        const onSubmit = (event) => {
            event.preventDefault();
            this.props.createFantasyTeam(this.state)

                .then(() => window.location.href = '/fantasy_teams')
        }
        return (
            <form id="form-backround" onSubmit={onSubmit}>
                <label className="Form-label" htmlFor="name"> Name: </label>&nbsp;<br></br>
                <input className="Form-input" name="name" type="text" onChange={onChange} /> <br></br>
                <label className="Form-label" htmlFor="nickname"> Nickname:</label>&nbsp;<br></br>
                <input className="Form-input" name="nickname" type="text" onChange={onChange} /><br></br>
                <label className="Form-label" htmlFor="color"> Color </label><br></br>
                <input className="Form-input" name="color" type="text" onChange={onChange} /><br></br>
                <label className="Form-label" htmlFor="country"> Country </label><br></br>
                <input className="Form-input" name="country" type="text" onChange={onChange} /><br></br><br></br>
                <input className="submit-button" type="submit" value="Add A Fantasy Team" />
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    // console.log(fantasyTeam)
    return {
        createFantasyTeam: (fantasyTeam) => dispatch(createFantasyTeam(fantasyTeam))

    }
}
export default connect(null, mapDispatchToProps)(Form)
