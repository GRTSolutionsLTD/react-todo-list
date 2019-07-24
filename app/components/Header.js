import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';





function Header() {
  return (
    <div>
     
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/table">
          my list
        </Link>
        <Link to="/addTask">
          add task
        </Link>
        <Link to="/circle">
          show completed!
        </Link>
      </nav>
    </div>
  );
}

export default Header;