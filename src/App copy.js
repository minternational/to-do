import React from 'react';
import TodoList from './TodoList'
import todosData from './todosData'
import './index.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  
  render() {
    const todoItems = this.state.todos.map(task => <TodoList key={task.id} task={task} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}


export default App;
