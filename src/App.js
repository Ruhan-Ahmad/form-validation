import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  Switch,
  Route
} from "react-router-dom";
import {Login} from './MyComponents/Login';
import {Signup} from './MyComponents/Signup';
import {Header} from './MyComponents/Header';
import {Info} from './MyComponents/Info';

function App() {
  return (
    <>
    <Header />
        <Switch>
            <Route exact path="/">
            <Signup/>
            </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
        </Switch>

    </>
  );
}

export default App;
