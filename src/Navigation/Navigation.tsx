import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navigationbar } from '../components'
import { Home } from '../pages'

const Navigation = () => {
    return (
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default Navigation
