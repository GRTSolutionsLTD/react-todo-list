/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Table from '../Table/Loadable';
import Header from '../../components/Header';
import GlobalStyle from '../../global-styles';
import AppComponent from '../../components/AddTask/App';
import Circle from '../Circle/index';


export default function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/addTask" component={AppComponent}/>
        <Route path="/table" component ={Table}/>
        <Route path="/circle" component ={Circle}/>
        <Route component={NotFoundPage} />
      </Switch>
      
      <GlobalStyle />
    </div>
  );
}
