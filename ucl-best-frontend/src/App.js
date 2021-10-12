
import './App.css';
import Menu from './components/general-components/Menu';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/general-components/AboutUs';
import HomePage from './components/general-components/HomePage';
import Teams from './components/teams-components/Teams.js';
import Team from './components/teams-components/Teams.js';
import FantasyTeams from './components/fantasyTeams-components/FantasyTeams.js';
import Form from './components/fantasyTeams-components/Form';
import FantasyTeamShow from './components/fantasyTeams-components/FantasyTeamShow.js';
import Increment from './components/general-components/Increment'

function App() {
  console.log('app.js')
  return (
    <React.Fragment>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/fantasy_teams/new" exact component={Form} />
          <Route path="/fantasy_teams/:id" exact component={FantasyTeamShow} />
          <Route path="/about-us" exact component={() => <AboutUs />} />
          <Route path="/teams" exact component={() => <Teams />} />
          <Route path="/fantasy_teams" exact component={() => <FantasyTeams />} />
         
          <Route path="/team" exact component={Team} />
          <Route path="/increment" exact component={Increment} />
          
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
