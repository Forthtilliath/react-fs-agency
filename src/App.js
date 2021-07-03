import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

const App = () => {
    let nbProjets = 4;

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* Génère les routes dynamiquement */}
            {[...Array(nbProjets).keys()].map((n) => (
                <Route exact path={'/projet-' + (n + 1)} render={() => <Projets id={n} />} />
            ))}
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
    );
};

export default App;
