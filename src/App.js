import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'learn React.js' },
      { id: 2, content: 'apply for a job' },
      { id: 3, content: 'have some vodka' },
      { id: 4, content: 'go work' }
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
