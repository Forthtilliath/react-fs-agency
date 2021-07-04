import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Switch, Redirect, useLocation, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    const [lastScroll, setLastScroll] = useState(0);
    const nbProjets = 4;
    const location = useLocation();
    const history = useHistory();

    const arrRoutes = useMemo(() => ['', 'projet-1', 'projet-2', 'projet-3', 'projet-4', 'contact'], []);

    /** Ajoute un délai entre chaque appel */
    const wait = useCallback(
        (fn) => {
            const time = +new Date();
            if (time > lastScroll + 500) {
                fn();
                setLastScroll(time);
            }
        },
        [lastScroll],
    );

    const handleScrollToElement = useCallback(
        (e) => {
            const url = window.location.origin + '/';

            let iRoute = arrRoutes.findIndex((route) => window.location.href.toString() === url + route);

            // Ajout de la navigation au scroll
            if (e.wheelDeltaY > 0) {
                if (iRoute > 0) wait(() => history.push(arrRoutes[iRoute - 1]));
            } else {
                if (iRoute < arrRoutes.length) wait(() => history.push(arrRoutes[iRoute + 1]));
            }
        },
        [arrRoutes, history, wait],
    );

    useEffect(() => {
        window.addEventListener('wheel', handleScrollToElement);
        return () => {
            window.removeEventListener('wheel', handleScrollToElement);
        };
    }, [handleScrollToElement]);

    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                {/* Génère les routes dynamiquement */}
                {[...Array(nbProjets).keys()].map((n) => (
                    <Route exact path={'/projet-' + (n + 1)} render={() => <Projets id={n} />} />
                ))}
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </AnimatePresence>
    );
};

export default App;
