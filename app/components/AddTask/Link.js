import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
const Link = ({ active, children, onClick }) => (
  <Button
    type="button"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
