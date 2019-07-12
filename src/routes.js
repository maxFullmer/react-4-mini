import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home.js';

import TopicList from './Components/TopicList/TopicList.js';

export default (
    <Switch>
        <Route component={Home} exact path="/" />

        <Route component={TopicList} path="/topics" />
    </Switch>
)