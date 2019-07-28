import React from 'react';
import Nav from 'react-bootstrap/Nav'




function Header() {
  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/table">All Tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/addTask" >Add/Edit Task</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/circle" >Status</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;