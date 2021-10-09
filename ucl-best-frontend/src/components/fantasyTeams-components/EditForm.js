
import React, { Component } from 'react'
import { createFantasyTeam, editFantasyTeam } from '../actions/fantasyTeamAction'
import { connect } from 'react-redux'
import './FantasyTeam.css'



export class EditForm extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
            id: this.props.fantasyTeam.id,
            name: this.props.fantasyTeam.name,
            nickname: this.props.fantasyTeam.nickname,
            color: this.props.fantasyTeam.color,
            country: this.props.fantasyTeam.country
        }
    }
    render() {
        console.log('EditForm.js', this.props)
        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const onEdit = (event) => {
            event.preventDefault();
            this.props.editFantasyTeam(this.state)
            this.props.setShowEditForm(false)
        }
        return (
            <form onSubmit={onEdit}>
                <label htmlFor="name"> Name </label>
                <input name="name" type="text" onChange={onChange} value={this.state.name} />
                <label htmlFor="nickname"> Nickname</label>
                <input name="nickname" type="text" onChange={onChange} value={this.state.nickname} />
                <label htmlFor="color"> Color </label>
                <input name="color" type="text" onChange={onChange} value={this.state.color}/>
                <label htmlFor="country"> Country </label>
                <input name="country" type="text" onChange={onChange} value={this.state.country} />
                <input type="submit" value="Edit Fantasy Team" />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editFantasyTeam: (fantasyTeam) => dispatch(editFantasyTeam(fantasyTeam))
       
    }

}


export default connect(null, mapDispatchToProps)(EditForm)
