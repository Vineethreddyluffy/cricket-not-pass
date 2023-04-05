import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import GetMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={GetMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
