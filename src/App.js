import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Favorites from './containers/Favorites/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
    <Layout>
    <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
    </Switch>
    </Layout>
    </Router>
    </div>
  );
}

export default App;
