import React, { Component } from 'react'

// 1. Dependencies
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 2. i18n
import T from 'i18n-react'

// 3. Components
import {
  Home,
  Projects,
  Products, 
  About, 
  Mohm,
  Noah
} from './screens'

// 4. for style
import './App.scss'

// 5. Static Resources


//-----*-----*-----*-----*-----*-----//

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Products' component={Products} />
          <Route path='/About' component={About} />
          <Route path='/Mohm' component={Mohm} />
          <Route path='/Noah' component={Noah} />
        </div>
      </Router>
    )
  }
}


export default App