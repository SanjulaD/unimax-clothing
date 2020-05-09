import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/home.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is from Hats Page</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/hats' component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
