import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Watchlist from "./Watchlist";
import Movies from "./Movies";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/login" component={Login} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/movies" component={Movies} />
        <Route exact path="/" component={Home} />

