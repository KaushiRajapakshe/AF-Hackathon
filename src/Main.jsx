import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Place from './Places';
import AdminMen from './AdminMenu';
import reg from './Register';
import log from './login';
import Home from './Home';
import Hote from './Hotel';
import Eve from './Event';
import Ite from './Item';
import Pla from './Place';




const Main = () => (
    <BrowserRouter >
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Place" component={Place} />
        <Route path="/log" component={log} />
        <Route path="/AdminMen" component={AdminMen} />
        <Route path="/reg" component={reg} />
        <Route path="/Hote" component={Hote} />
        <Route path="/Eve" component={Eve} />
        <Route path="/Ite" component={Ite} />
        <Route path="/Pla" component={Pla} />


    </Switch>
    </BrowserRouter>
)

export default Main;
