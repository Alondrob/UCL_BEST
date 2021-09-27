
import './App.css';
import Menu from './components/Menu';


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Teams from './components/Teams';
import FantasyTeams from './components/FantasyTeams';
import Form from './components/fantasyTeams-components/Form';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about-us" exact component={() => <AboutUs />} />
          <Route path="/teams" exact component={() => <Teams />} />
          <Route path="/fantasy_teams" exact component={() => <FantasyTeams/>}/>
          <Route path="/fantasy_teams/new" exact component={Form}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
