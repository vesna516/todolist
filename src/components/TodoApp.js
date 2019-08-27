import React, { Component } from 'react';
import List from './List/List';
import CreateItem from './CreateItem/CreateItem';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem('todoList')) || [],
    }

    this.updateList = this.updateList.bind(this);
  }

  updateList(updatedList) {
    this.setState({ list: updatedList });
    localStorage.setItem('todoList', JSON.stringify(updatedList));
  }

  render() {
    const { list } = this.state;
    return (
      <div className="todo-wrapper">
        <CreateItem
          list={list}
          updateList={this.updateList}
        ></CreateItem>
        <List
          list={list}
          updateList={this.updateList}
        ></List>
      </div>
    );
  }
}

export default TodoApp;