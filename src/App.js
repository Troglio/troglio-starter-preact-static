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

        /* IF TRELLO IS SUPPLYING NEW DATA LIVE */
        if(t.args[0].context !== undefined){

          /* GET LIVE PAGE'S DATA: an array of pages data ( including paths to generate routes on-the-go ) */
          const pages = t.arg('pages')

          /* GET LIVE CONFIG'S DATA: an object with the sites properties */
          const config = t.arg('config')


          this.setState({dynamicRoutes: pages, config: config, bypassRoutes: true})  
        }

      })
    }

  }

  render(){
    /* THERE ARE TWO POSSIBLE SCENARIOS: CLASSIC APP    OR     APP IS OPENED IN TRELLO'S PREVIEW */
    if ( this.state.bypassRoutes ) {
        /* ======================================================================================================== */
        /* APP IS OPENED FROM TRELLO IN PREVIEW MODE : GENERATE ROUTES ON-THE-GO AND PROPAGATE LIVE DATA INTO PROPS */
        /* ======================================================================================================== */
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
        /* ========================================================================================================== */
        /* APP IS OPENED NORMALLY (not in Trello's preview) : SERVE CLASSIC ROUTES FOR PRODUCTION WITH PUBLISHED DATA */
        /* ========================================================================================================== */
        return (
        <Router>
          <Routes />
        </Router>
      )
    }
  }
}


export default hot(module)(App)
