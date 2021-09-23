
import React, { Component } from 'react'

export default class NewPlayerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryOfBirth: '',
            dateOfBirth: '',
            id: '',
            name: '',
            nationality: '',
            position: '',
            role: ''
        }

    }


    render() {
        const handleChange = (event) => {
            console.log(event)
            this.setState({
                [event.target.name]: event.target.value
            })

        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.addPlayer(this.state)
            this.setState({
                countryOfBirth: '',
                dateOfBirth: '',
                id: '',
                name: '',
                nationality: '',
                position: '',
                role: ''
            }
            )
        }
        return (

            <form onSubmit={handleSubmit}>
                <label> Country Of Birth </label>
                <input onChange={handleChange} type="text" name="countryOfBirth" value={this.state.countryOfBirth} />
                <label> name </label>
                <input onChange={handleChange} type="text" name="name" value={this.state.name} />
                <label> id </label>
                <input onChange={handleChange} type="number" name="id" value={this.state.id} />
                <label> position </label>
                <input onChange={handleChange} type="text" name="position" value={this.state.position} />
                <input type="submit" value="Add Player" />
            </form>

        )
    }
}
