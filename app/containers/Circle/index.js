/**
 *
 * Circle
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export function Circle() {
  useInjectReducer({ key: 'circle', reducer });
  useInjectSaga({ key: 'circle', saga });

  return (
    <div>
      <Helmet>
        <title>Circle</title>
        <meta name="description" content="Description of Circle" />
      </Helmet>
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="pink" />
      
      </svg>
    </div>
  );
}

Circle.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   circle: makeSelectCircle(),
// });

function mapStateToProps(state) {
  return {
    todoList: state
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
