import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the circle state domain
 */

const selectCircleDomain = state => state.gl || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Circle
 */

const makeSelectCircle = () =>
  createSelector(
    selectCircleDomain,
    substate => substate,
  );

export default makeSelectCircle;
export { selectCircleDomain };
