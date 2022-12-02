import './App.css';

import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );


}

export default App;
