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
        console.log('Teamlist.js', this.props)
        console.log('teamlist state', this.state)
        const handleChange = (event) => {
            if (event.target.value === "0") {
                return;
            }
            const selectedTeam = this.props.teams.find(team => team.id === parseInt(event.target.value))

            this.setState({
                team: selectedTeam
            })
        }
        return (

            <div>
                {/* {teams.map(team => <Team key={team.id} team={team} />)} */}
                <select className="select" onChange={handleChange}>
                    <option value="0">Select a team</option>
                    {this.props.teams.map(team => <option value={team.id} key={team.id}> {team.name} </option>)}
                </select>
                {this.state.team && <Team className="team" key={this.state.team.id} team={this.state.team} fantasyTeam={this.props.fantasyTeam} />}
            </div>
        );

    }



}

export default TeamList;