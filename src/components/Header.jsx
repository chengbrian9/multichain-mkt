import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <Link to="/">
        <h1 className="logo">The Multichain Marketplace</h1>
      </Link>

      <ul>
        <Link to="/" className='navlink'>
          <li>Home</li>
        </Link>
        <Link to="/about" className='navlink'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}


