/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {addTodo} from '../App/actions/index'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <input
          ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddTodo)
