import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import CarDetailsContainer from './containers/CarDetailsContainer';
import CarListContainer from './containers/CarListContainer';
import store from './store';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact={true} path="/" component={CarListContainer} />
            <Route path="/car-details/:stockNumber" component={CarDetailsContainer} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
