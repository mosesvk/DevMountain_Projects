import React from 'react'
import {HashRouter} from 'react-router-dom'
import Nav from './components/Nav/nav'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <Nav />
      {routes}
    </HashRouter>
  );
}

export default App;
