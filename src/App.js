import './App.css'
import Navbar from "./components/Homepage/Navbar";
import MainLocation from "./components/Homepage/MainLocation";
import Gallery from "./components/Homepage/Gallery";
import PopularLocation from './components/Homepage/PopularLocation';
import Footer from './components/Homepage/Footer';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/">
            <MainLocation />
            <Gallery/>
            <PopularLocation/>
          </Route>
 
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
