/**
 *
 * Table
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTable from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Table() {
  useInjectReducer({ key: 'table', reducer });
  useInjectSaga({ key: 'table', saga });

  return (
    <div>
      <Helmet>
        <title>Table</title>
        <meta name="description" content="Description of Table" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  table: makeSelectTable(),
});

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
)(Table);
