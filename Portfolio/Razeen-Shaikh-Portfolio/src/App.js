import React, { Suspense, lazy } from 'react';
import { routes } from './routes'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

const Sidebar = lazy(() => import('./components/sidebar/Sidebar.jsx'))
const Main = lazy(() => import('./components/main/Main.jsx'));
const MySkills = lazy(() => import('./components/myskills/MySkills.jsx'));
const Projects = lazy(() => import('./components/projects/Projects.jsx'))
const HtmlCss = lazy(() => import('./components/projects/HtmlCss.jsx'))
const JavaScript = lazy(() => import('./components/projects/JavaScript.jsx'))
const ReactJs = lazy(() => import('./components/projects/ReactJs.jsx'))
const Contact = lazy(() => import('./components/contact/Contact.jsx'))
const NotFound = lazy(() => import('./components/NotFound'))

const App = () => {
    return (
        <div className="row justify-content-end align-items-end">
            <Suspense fallback={<div>Loading...</div>}>
                {routes.map((route, index) => (
                    route.sidebar === true &&
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<Sidebar color={route.color} />}
                    />
                ))}
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/myskills' component={MySkills} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/react' component={ReactJs} />
                    <Route exact path='/javascript' component={JavaScript} />
                    <Route exact path='/htmlcss' component={HtmlCss} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/404' component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
