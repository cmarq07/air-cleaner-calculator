import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  <Router>
    <div>Hello world!</div>
    <Switch>
      <Route path='/home'>
        <Home/>
      </Route>
    </Switch>
  </Router>
}

function Home() {
  return (
      <HomePage/>
  )
}

function FindOrTest() {
  return (
      <h2>Find or Test an Air Cleaner</h2>
  )
}

export default App;
