
import React, { Component } from 'react'
import { createFantasyTeam } from '../actions/fantasyTeamAction'
import {connect} from 'react-redux'

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
        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const onSubmit = (event) => {
            event.preventDefault();
            this.props.createFantasyTeam(this.state)
                .then(() => window.location.href = '/fantasy_teams')
            
        }
        return (
            <form onSubmit={onSubmit}>
                <label htmlFor="name"> Name </label>
                <input name="name" type="text" onChange={onChange}/>
                <label htmlFor="nickname"> Nickname</label>
                <input name="nickname" type="text" onChange={onChange} />
                <label htmlFor="color"> Color </label>
                <input name="color" type="text" onChange={onChange} />
                <label htmlFor="country"> Country </label>
                <input name="country" type="text" onChange={onChange} />
                <input type="submit" value="Add A Fantasy Team"/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createFantasyTeam: (fantasyTeam) => dispatch(createFantasyTeam(fantasyTeam))
    }
}
export default connect(null, mapDispatchToProps)(Form)
