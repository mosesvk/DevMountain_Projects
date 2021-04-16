import React from 'react'
import {HashRouter} from 'react-router-dom'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/Footer'
import routes from './routes'

function App() {

  return (
    <HashRouter>
      <Nav/>
      {routes}
      <Footer />
    </HashRouter>
  );
}

export default App;
