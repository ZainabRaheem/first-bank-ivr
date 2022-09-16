import "./App.css";
import "./index.css";
import Layout from "./Layout/Layout";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Main from "./Layout/Main";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Layout />
        {/* <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
