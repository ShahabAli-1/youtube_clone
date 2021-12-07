import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import SideBar from "./Components/SideBar/SideBar";
import RecommendedVideos from "./Components/RecommendedVideos/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
