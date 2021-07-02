import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

const App = () => {
  return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projet-1" component={Projets.Projet1} />
            <Route exact path="/projet-2" component={Projets.Projet2} />
            <Route exact path="/projet-3" component={Projets.Projet3} />
            <Route exact path="/projet-4" component={Projets.Projet4} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
      </Switch>
    );
};

export default App;
