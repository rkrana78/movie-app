import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Header/SimpleBottomNavigation';
import Trending from './components/Trending/Trending';
import Movies from './components/Movies/Movies';
import TvSeries from './components/TvSeries/TvSeries';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './components/Search/Search';


function App() {
  return (
    <Router>
      <Header></Header>
      <div className="app">
        <container>
        <Switch>
        <Route exact path="/">
            <Trending />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/series">
            <TvSeries />
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
        </Switch>
        </container>
        
      </div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </Router>
    
  );
}

export default App;
