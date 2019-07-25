import React, { memo ,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';



export function Circle({todos}) {
  useInjectReducer({ key: 'circle', reducer });
  useInjectSaga({ key: 'circle', saga });


  const [completed, setCompleted] = useState(0);
  const [notCompleted, setNotCompleted] = useState(0);

  useEffect(() => {
    const comletedTasks = todos.filter(t => t.completed===true);
    setCompleted(comletedTasks.length); 
    
    const notComletedTasks = todos.filter(t => !t.completed===true);
    setNotCompleted(notComletedTasks.length);
  });

  return (
    <div>
      <Helmet>
        <title>Circle</title>
        <meta name="description" content="Description of Circle" />
      </Helmet>
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="pink"  />
      </svg>
      <p>comleted tasks:</p>
      <label>{completed}</label>
      <br></br>
      <p>not comleted tasks:</p>
      <label>{notCompleted}</label>
    </div>
  );
}

Circle.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos:PropTypes.array
};

// const mapStateToProps = createStructuredSelector({
//   circle: makeSelectCircle(),
// });

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Circle);
