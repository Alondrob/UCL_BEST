
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
                <label className="edit-form-name" htmlFor="name"> Name </label><br></br>
                <input className="input-edit-form" name="name" type="text" onChange={onChange} value={this.state.name} /><br></br><br></br>
                <label className="edit-form-name" htmlFor="nickname"> Nickname</label><br></br>
                <input className="input-edit-form" name="nickname" type="text" onChange={onChange} value={this.state.nickname} /><br></br><br></br>
                <label className="edit-form-name" htmlFor="color"> Color </label><br></br>
                <input className="input-edit-form" name="color" type="text" onChange={onChange} value={this.state.color} /><br></br><br></br>
                <label className="edit-form-name" htmlFor="country"> Country </label><br></br>
                <input className="input-edit-form" name="country" type="text" onChange={onChange} value={this.state.country} /><br></br><br></br>
                <input className="edit-form-button" type="submit" value="Edit Fantasy Team" />
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

//new branch