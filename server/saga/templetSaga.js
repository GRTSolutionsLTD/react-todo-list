import { put, takeLatest, all } from 'redux-saga/effects';
// import * as actions from '../../app/containers/App/actions/index';

/**
 * worker saga
 * saga to populate store with templates
 */
export function* addTodo(action) {
  const task = { "id": action.id, "text": action.text, "completed": false };
  const json = yield fetch('http://localhost:3001/api/tasks/add', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(task)
  })
    .then(response => response.json());
  yield put({ type: "addTodoSucced", json });
}

export function* toggleTodo(action) {
  const json = yield fetch(`http://localhost:3001/api/tasks/toggle/+${action.id}`)
    .then(response => response.json());
  yield put({ type: "toggleTodoSucced", json });
}
//   yield put(actions.addTodotSuccess(action.uri));


// /**
//  * worker saga
//  * saga which puts a mock template onto the array
//  * of templates in the store
//  */
// export function* addNewTemplateToStore() {

//   yield put();
// }

// /**
//  * worker saga
//  * saga which checks if template is in the store
//  * and loads the template if it is not
//  */
// export function* addTemplateObjectToStore(action) {
//   const templateObjects = yield select(selectors.templateObjects);

//   if (!templateObjects || !templateObjects[action.uri]) {
//     try {
//       const templateObj = yield Template.fromUrl(action.uri);
//       yield put(actions.loadTemplateObjectSuccess(action.uri, templateObj));
//     } catch (err) {
//       yield put(actions.loadTemplateObjectError(err));
//     }
//   }
// }

/**
 * watcher saga
 */
function* templatesSaga() {
  yield takeLatest('ADD_TODO', addTodo)
  yield takeLatest('TOGGLE_TODO', toggleTodo)
}

export default function* rootSaga() {
  yield all([
    templatesSaga(),
  ]);
}
