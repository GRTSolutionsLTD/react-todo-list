import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import './styleAddTask.scss'

const AppComponent = () => (
  <div>
    <Footer />
    <AddTodo />
    <VisibleTodoList />
    
  </div>
)

export default AppComponent