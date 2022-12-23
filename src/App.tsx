import './App.css';

import { Carousel } from './layouts/HomePage/components/Carousel';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Heros } from './layouts/HomePage/components/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';
import { Navbar } from './layouts/NavbarAndFooter/Navbar'
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />

    </div>
  );


}

export default App;
