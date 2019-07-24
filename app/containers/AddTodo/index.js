import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose, bindActionCreators } from 'redux';
import * as todoActions from '../App/actions/index';

export function AddTodo({ actions }) {
  let currentTaskToADD;
  // onInputCahnge(event) => {

  // }
  return (
    <div>
      <Helmet>
        <title>AddTodo</title>
        <meta name="description" content="Description of AddTodo" />
      </Helmet>
      {/* <input onChange={this.onInputCahnge} /> */}
      <button type='button' onClick={() => { actions.addTodo(currentTaskToADD) }}>
        Add Todo
      </button>
    </div>);
}

AddTodo.propTypes = {
  dispatch: PropTypes.func,
  actions: PropTypes.func
};

function mapStateToProps(state) {
  return {
    todoList: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:
      { addTodo: bindActionCreators(todoActions.addTodo, dispatch) }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddTodo);
