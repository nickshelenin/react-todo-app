import React, { Component } from 'react';

export class AddForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input type='text' name='addInput' />
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default AddForm;
