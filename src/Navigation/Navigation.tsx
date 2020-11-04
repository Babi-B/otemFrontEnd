import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navigationbar } from '../components'
import { Home, ProductDetails } from '../pages'

const Navigation = () => {
    return (
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/productDetails' component={ProductDetails} />
            </Switch>
        </Router>
    )
}

export default Navigation
