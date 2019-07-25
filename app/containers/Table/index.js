import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ReactTable from "react-table"
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTable from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import "react-table/react-table.css";

export function Table({todos}) {
  useInjectReducer({ key: 'table', reducer });
  useInjectSaga({ key: 'table', saga });
  
  return (
    <div>
      <Helmet>
        <title>Table</title>
        <meta name="description" content="Description of Table" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div>
        <ReactTable
          data={todos.map(todo =>
            (todo.completed === true)
              ? { ...todo, completed: "true" }
              : { ...todo, completed: "false" }
          )}
          columns={[
            {
              
              columns: [
                {
                  Header: "Id",
                  accessor: "id"
                },
                {
                  Header: "Describe",
                  accessor: "text"
                },
                {
                  Header: "IsCompleted",
                  accessor: "completed"
                }
              ]
            },

          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />

      </div>
    </div>
  );
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTable() 
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
