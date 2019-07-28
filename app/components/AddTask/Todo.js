/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'

const Todo = ({ onClick, completed, text }) => (<ListGroup.Item 
  as="li"
  onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
  {text}
</ListGroup.Item>);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
