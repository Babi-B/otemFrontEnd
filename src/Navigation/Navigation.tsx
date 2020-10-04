import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navigationbar } from '../components'
import { Home } from '../pages'

const Navigation = () => {
    return (
        <Router>
            <div className="App">
                <Navigationbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

export default Navigation
