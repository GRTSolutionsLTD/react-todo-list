/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import todos from './containers/App/reducers/Todo';
import visibilityFilter from './containers/App/reducers/VisibilityFilter'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    globalTodos: todos,
    visibilityFilter,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
