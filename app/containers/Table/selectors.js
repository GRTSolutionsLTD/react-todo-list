import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the table state domain
 */

const selectTableDomain = state => state.todos || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Table
 */

const makeSelectTable = () =>
  createSelector(
    selectTableDomain,
    substate => substate,
  );

export default makeSelectTable;
export { selectTableDomain };
