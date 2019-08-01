/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../App/actions/index'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form 
        className="ml-5"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <span>enter task</span>
        <br/>
        <input type="text" placeholder="Enter task" ref={node => input = node} />
        <br/><br/><br/>
        <input variant="primary" type="submit" value="add"/>
       
      </form>

    </div>
  )
}
AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddTodo)
