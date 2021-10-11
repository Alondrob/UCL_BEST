import React, { Component } from 'react';
import Team from './Team';


class TeamList extends Component {
    constructor(props) {
// console.log(props)
        super(props)
        // console.log(this.props)
        this.state =
        {
            team: undefined
        }
    }
    render() {
       
        const handleChange = (event) => {
            if (event.target.value === "0") {
                return;
            }
            const selectedTeam = this.props.teams.find(team => team.id === parseInt(event.target.value))

            this.setState({
                team: selectedTeam
            })
        }

        const abTeams = this.props.teams.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            else if (a.name > b.name) {
                return 1
            }
            else {
                return 0
            }
        })
        return (

            <div>
                {/* {teams.map(team => <Team key={team.id} team={team} />)} */}
                <select onChange={handleChange}>
                    <option value="0">Select a team</option>
                   
                    {abTeams.map(team => <option value={team.id} key={team.id}> {team.name} </option>)}
                </select>
                {this.state.team && <Team key={this.state.team.id} team={this.state.team} fantasyTeam={this.props.fantasyTeam} />}
            </div>
        );

    }



}

export default TeamList;