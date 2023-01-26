import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Navs from './component/NavBar/Nav';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navs/>
      </BrowserRouter>
      <Home/>
    </Fragment>
  );
}

export default App;
