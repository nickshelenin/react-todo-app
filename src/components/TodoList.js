import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} markComplete={props.markComplete} deleteTodo={props.deleteTodo} />;
      })}
    </div>
  );
}
