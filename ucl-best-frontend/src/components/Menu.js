import React from 'react'
import { Link, withRouter } from 'react-router-dom'



function Menu() {
    return (
        <div>
            <Link to="/"> Home Page </Link>
            <Link to="/about-us"> About Us </Link>
            <Link to="/terms"> Terms </Link>
            <Link to="/teams"> Go To Teams </Link>
        </div>
    )
}

export default withRouter(Menu)
