import React, {useState} from 'react'
import {HashRouter} from 'react-router-dom'
import Nav from './components/Nav/nav'
import routes from './routes'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <HashRouter>
      <Nav />
      {routes}
    </HashRouter>
  );
}

export default App;
