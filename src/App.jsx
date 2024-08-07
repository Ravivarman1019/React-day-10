import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/add" component={UserForm} />
          <Route path="/edit/:id" component={UserForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
