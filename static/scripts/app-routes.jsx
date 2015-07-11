let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
let Master = require('./components/master.jsx');
let Home = require('./components/pages/home.jsx');

let AppRoutes = (
    <Route name="root" path="/" handler={Master}>
        <Route name="home" handler={Home}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

module.exports = AppRoutes;