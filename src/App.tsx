import React, { useState, useEffect } from 'react';
import './App.css';

import { Welcome } from './pages';
import Navigation from './Navigation/Navigation';
import { base_url } from './config.json'

globalThis.BASE_URL = base_url;

const App: React.FC = (): JSX.Element => {

  const [mainPage, setMainPage] = useState('welcome')

  useEffect(() => {
 
  }, [])

   return mainPage === 'welcome' ? <Welcome onClick={()=>setMainPage('Navigation')} /> : <Navigation />
}
export default App;
