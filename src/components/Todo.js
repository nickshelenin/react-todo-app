import React from 'react';

function Todo(props) {
  const getStyle = () => {
    return { textDecoration: props.todo.completed ? 'line-through' : 'none' };
  };

  const { title, id } = props.todo;

  return (
    <div className='todo'>
      <p style={getStyle()}>
        <input type='checkbox' onChange={props.markComplete.bind(this, id)} />
        {title}
      </p>
      <button onClick={props.deleteTodo.bind(this, id)}>X</button>
      {/* <input type="submit" value='X' onClick={props.deleteTodo} /> */}
    </div>
  );
}

export default Todo;
