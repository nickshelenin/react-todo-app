import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'todo1',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'todo2',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'todo3',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    let todoTitle = e.target.elements.addInput.value;
    let newTodo = {
      id: uuid.v4(),
      title: todoTitle,
      completed: false
    };

    if (todoTitle.length >= 1) {
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }else {
      return
    }
  };

  render() {
    return (
      <div>
        <AddForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
