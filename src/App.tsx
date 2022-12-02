import './App.css';

import React from 'react';

function App() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Luv 2 Read</span>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Search books</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>Shelf</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>Admin</a>
            </li>

          </ul>
          <ul className='navbar-nav ms-auto'>

            <li className='nav-item m-1'>
              <button type='button' className='btn btn-outline-light'>Sign in</button>
            </li>
            :
            <li>
              <button className='btn btn-outline-light' >Logout</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );


}

export default App;
