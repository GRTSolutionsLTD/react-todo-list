import { connect } from 'react-redux'
import TodoList from '../components/AddTask/TodoList'
import { VisibilityFilters , toggleTodo } from './App/actions/index';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.todos.filter(t => !t.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)