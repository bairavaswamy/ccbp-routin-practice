import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import About from './components/About'

import Contact from './components/Contact'

import Header from './components/Header'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="app">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <h1>Wave</h1>
      <Header />
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
