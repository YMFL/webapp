/**
 * Created by Administrator on 2017/5/10.
 */
import React from 'react';
import ReactDOM from 'react-dom' ;
import {hashHistory} from 'react-router'
import RouteMap from './router/routeMap'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//reducers 指明如何更新state
import reducer from './reducers';
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>
    ,document.getElementById('root'))
