import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss'
import {apearDiv} from '../style/header'

function Header() {
  

  return (
    <nav className="nav-header global-style">

      <p>tasks</p>

      <div id="link" className="links">
        <ul>
          <li> <Link to="/">
            Home
          </Link>
          </li>
          <li><Link to="/table">
            my list
          </Link></li>
          <li><Link to="/addTask">
            add task
          </Link></li>
          <li><Link to="/circle">
            show completed!
          </Link></li>
          <li><a id="down" href="https://jenkins.io">download</a></li>
        </ul>
      </div>
      <button type="button"  className="open-link" onClick={apearDiv}>=</button>
    </nav>
  );
}

export default Header;