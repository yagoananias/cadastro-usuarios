import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "10rem", margin: "2rem auto"}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <AddUser path="/add" component={AddUser} />
          <EditUser path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
