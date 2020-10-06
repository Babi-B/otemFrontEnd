import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import { DropDownBtn } from '../../components'

import './Navigationbar.css'

const Navigationbar = props => {
    return (
        <Navbar collapseOnSelect className='sticky-top' style={{ backgroundColor: '#6D214F' }}>
            <Navbar.Brand href="#home">
                <span className='otemProductText'>OTEMPRODUCTS</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto d-flex">
                    <Nav.Link href="#features">
                        <DropDownBtn
                            name='Products'
                        />
                    </Nav.Link>
                    <Nav.Link href="#features">
                        <DropDownBtn
                            name='Resources'
                        />
                    </Nav.Link>
                </Nav>
                <DropDownBtn
                    name='Change Language'
                    width={190}
                />
                <Nav.Link href="#deets">
                    <span className="loginText">LOG IN</span>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    <div className='orderNowBtn'>
                        <span className='orderNowText' style={{ fontSize: 14, fontWeight: 'bold' }}>ORDER NOW</span>
                    </div>
                </Nav.Link>

            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return{
        i18n: state.LanguageReducer.i18n
    }
}
export default connect(mapStateToProps)(Navigationbar)
