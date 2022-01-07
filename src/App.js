import { onSnapshot, collection } from 'firebase/firestore'
import React, { useEffect } from 'react';
import db from './firebase';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';


function App() {

  useEffect(() => {
    console.log(db);
    onSnapshot(collection(db, 'movies'), (snapshot) => {
      console.log(snapshot);
    });
  });

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="">
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
