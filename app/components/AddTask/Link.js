import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav'

const Link = ({ active, children, onClick }) => (
  <Nav variant="pills" activeKey="1"s>
    <Nav.Item>
      <Nav.Link 
        eventKey="1" 
        href="#/home"
        type="button"
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: '4px',
        }}
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  </Nav>

)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
