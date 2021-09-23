import React, { Component } from 'react';
import Team from './Team';





class TeamList extends Component {
    constructor(props) {

        super(props)
        // console.log(this.props)
        this.state =
        {
            team: undefined
        }
    }
    render() {
        console.log(this.props)
        const handleChange = (event) => {
            const selectedTeam = this.props.teams.find(team => team.id === parseInt(event.target.value))

            this.setState({
                team: selectedTeam
            })
        }
        return (

            <div>
                {/* {teams.map(team => <Team key={team.id} team={team} />)} */}
                <select onChange={handleChange}>
                    {this.props.teams.map(team => <option value={team.id} key={team.id}> {team.name} </option>)}
                </select>
                {this.state.team && <Team key={this.state.team.id} team={this.state.team} />}
            </div>
        );

    }



}

export default TeamList;