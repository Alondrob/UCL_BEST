import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Menu() 
{
    console.log('Menu.js')
    return (
        
        <div>
            <Link to="/"> Home Page </Link>&nbsp;&nbsp;
            <Link to="/about-us"> About Us </Link>&nbsp;&nbsp;
            {/* <Link to="/terms"> Terms </Link>&nbsp;&nbsp; */}
            <Link to="/fantasy_teams"> Show All Fantasy Teams </Link>&nbsp;&nbsp;
            {/* <Link to="/teams"> Go To Teams </Link>&nbsp;&nbsp; */}
            <Link to="/fantasy_teams/new"> Create New Fantasy Team</Link>&nbsp;&nbsp;
        </div>
    )
}

export default withRouter(Menu)
