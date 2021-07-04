import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

const App = () => {
    const nbProjets = 4;
    const location = useLocation();
    const history = useHistory();

    // const arrRoutes = ['', 'projet-1', 'projet-2', 'projet-3', 'projet-4', 'contact'];

    // const smoothScrool = (fn) => {
    //     setTimeout(fn, 500);
    // }

    const wheelRouter = (wheel, before, after) => {
        // Appelé après un event sur le wheel, donc on considère que
        // wheel ne peut etre égal à 0
        wheel < 0 ? history.push(after) : history.push(before);
    };

    const handleScrollToElement = (e) => {
        const url = window.location.origin + '/';

        switch (window.location.href.toString()) {
            case url:
                if (e.wheelDeltaY < 0) history.push('projet-1');
                break;
            case url + 'projet-1':
                wheelRouter(e.wheelDeltaY, "", "projet-2");
                break;
            case url + 'projet-2':
                wheelRouter(e.wheelDeltaY, 'projet-1', 'projet-3');
                break;
            case url + 'projet-3':
                wheelRouter(e.wheelDeltaY, "projet-2", "projet-4");
                break;
            case url + 'projet-4':
                wheelRouter(e.wheelDeltaY, "projet-3", "contact");
                break;
            case url + 'contact':
                if (e.wheelDeltaY > 0) history.push('projet-4');
                break;
            default:
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScrollToElement);
        return () => {
            window.removeEventListener('wheel', handleScrollToElement);
        };
    }, [history]);

    return (
        <Switch location={location} key={location.pathname}>
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
