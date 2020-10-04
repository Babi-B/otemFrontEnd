import React, { useState, useEffect } from 'react';
import './App.css';

import { Welcome } from './pages'
import Navigation from './Navigation/Navigation'

const App = () => {

  const [mainPage, setMainPage] = useState('welcome')

  useEffect(() => {
 
  }, [])

   return mainPage == 'welcome' ? <Welcome onClick={()=>setMainPage('Navigation')} /> : <Navigation />
}
export default App;
