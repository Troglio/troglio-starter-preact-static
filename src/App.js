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

    /* IF THE APPLICATION IS OPENED IN AN IFRAME */
    if (typeof window !== "undefined" && this.isCrossOriginFrame() ) {
      const scriptjs = require("scriptjs")
      scriptjs('https://p.trellocdn.com/power-up.min.js', () => {
        var t = TrelloPowerUp.iframe();

        /* IF TRELLO IS SUPPLYING NEW DATA */
        if(t.args[0].context !== undefined){
          const pages = t.arg('pages') /* GET PREVIEWED PAGE'S DATA */
          const config = t.arg('config') /* GET PREVIEWED CONFIG'S DATA */
          this.setState({dynamicRoutes: pages, config: config, bypassRoutes: true})  
        }

      })
    }

  }

  render(){    
    if ( this.state.bypassRoutes ) {
        /* HERE WE ARE IN PREVIEW MODE FROM TRELLO: GENERATE ROUTES AND PROPAGATE NEW PROPS */
        return (
          <Router>
                <Switch>
                  {this.state.dynamicRoutes.map((route, i) => (
                      <Route key={i} exact path={route.path}
                        render={props => <All {...props} routeData={route} siteData={this.state.config} preview />}
                      />
                  ))}
                  <Route component={NoMatch} />
                </Switch>
          </Router>
        )  
    } else {
      /* HERE IS THE CLASSIC ROUTE CONFIG */
      return (
        <Router>
          <Routes />
        </Router>
      )
    }
  }
}


export default hot(module)(App)
