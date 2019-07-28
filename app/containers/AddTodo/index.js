/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { addTodo } from '../App/actions/index'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Form 
        className="ml-5"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <Form.Group  controlId="formBasicEmail">
          <Form.Label>enter task</Form.Label>
          <Form.Control type="text" placeholder="Enter task" ref={node => input = node} />

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}
AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddTodo)
