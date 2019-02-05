import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import { ICarDetailsProps } from './containers/CarDetailsContainer/CarDetails';
import { ICarListProps } from './containers/CarListContainer/CarList';
import store from './store';

const CarListContainer = lazy(() => import('./containers/CarListContainer'));
const CarDetailsContainer = lazy(() => import('./containers/CarDetailsContainer'));
const LoadingMessage = () => (
  <div className="loader-container">
    <div className="loader" />
  </div>
);

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Suspense fallback={<LoadingMessage />}>
            <Switch>
              <Route exact={true} path="/" component={(props: ICarListProps) => <CarListContainer {...props} />} />
              <Route
                path="/car-details/:stockNumber"
                component={(props: ICarDetailsProps) => <CarDetailsContainer {...props} />}
              />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
