import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Favourites from './containers/Favourites/Favourites';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
    <Layout>
    <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/favourites" component={Favourites}></Route>
          <Route exact path="/details" component={MovieDetails}></Route>
    </Switch>
    </Layout>
    </Router>
    </div>
  );
}

export default App;
