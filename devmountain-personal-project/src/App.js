import React from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/Footer'
import routes from './routes'
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

function App() {

  return (
    <Router>
      <Nav/>
      {routes}
      <Footer />
    </Router>
  );
}

export default App;
