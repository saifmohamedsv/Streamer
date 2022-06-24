import React from 'react';

import {Route, Router, Switch} from "react-router-dom";
import Header from "./Header/Header";
import StreamList from "./streams/streamList";
import StreamCreate from "./streams/streamCreate";
import StreamEdit from "./streams/streamEdit";
import streamDelete from "./streams/streamDelete";
import streamShow from "./streams/streamShow";
import history from '../history'

const App = () => {
    return (
        <div className={"ui container"}>
            <Router history={history}>
                <div style={{padding: "12px"}}>
                    <Header/>
                    <Switch>
                        <Route path={"/"} exact component={StreamList}/>
                        <Route path={"/streams/show/:id"} exact component={streamShow}/>
                        <Route path={"/streams/new"} exact component={StreamCreate}/>
                        <Route path={"/streams/edit/:id"} exact component={StreamEdit}/>
                        <Route path={"/streams/delete/:id"} exact component={streamDelete}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;



