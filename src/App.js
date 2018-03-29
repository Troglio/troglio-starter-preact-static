import React from 'react'
import { Router, Switch, Route, Link } from 'react-static'
import { hot } from 'react-hot-loader'

import Routes from 'react-static-routes'

import All from "./components/all"

const NoMatch = props => <h1>This page does not exist...</h1>

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dynamicRoutes:[],
      siteData:{},
      bypassRoutes: false
    }
  }

  isCrossOriginFrame () {
    try {
      return (!window.top.location.hostname);
    } catch (e) {
      return true;
    }
  }

  componentWillMount () {
    if (typeof window !== "undefined" && this.isCrossOriginFrame() ) {
      const scriptjs = require("scriptjs")
      scriptjs('https://p.trellocdn.com/power-up.min.js', () => {
        // this.updateRoutes()
        var t = TrelloPowerUp.iframe();
        if(t.args[0].context !== undefined){
          const pages = t.arg('pages')
          const config = t.arg('config')
          this.setState({dynamicRoutes: pages, config: config, bypassRoutes: true})  
        }
      })
    }
  }

  render(){    
    if ( this.state.bypassRoutes ) {
        return (
          <Router>
                <Switch>
                  {this.state.dynamicRoutes.map((route, i) => (
                      <Route key={i} exact path={route.troglio.path}
                        render={props => <All {...props} routeData={route.troglio} siteData={this.state.config} preview />}
                      />
                  ))}
                  <Route component={NoMatch} />
                </Switch>
          </Router>
        )  
    } else {
      return (
        <Router>
          <Routes />
        </Router>
      )
    }
  }
}




export default hot(module)(App)
