import logo from './logo.svg';
import {BrowserRouter as  Router, Route, Routes, useRoutes} from 'react-router-dom';

import Header from './Components/Header';
import NgosPage from './Containers/NgosPage/NgosPage';
import Landing from "./Containers/LandingPage/LandingPage.js";
import ReportPage from './Containers/ReportPage/ReportPage';

import './root.scss';
import './App.css';

import "./style.css";
function App() {
  let routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/ngos", element: <NgosPage /> },
    { path: "/report", element: <ReportPage /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Header/>
      <App />
    </Router>
  );
};

const HomePage = () =>{
  return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
  )
}

export default AppWrapper;
