import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss'



function Header() {
  return (
    <nav>
      <div className="">
        <ul className="">
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
        </ul>
      </div>
    </nav>
  );
}

export default Header;