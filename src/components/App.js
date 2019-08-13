import React, { Component } from 'react';
import List from './List/List';
import CreateItem from './CreateItem/CreateItem';

const id = function() {
  let id = 1;
  return () => id++;
}()

const list = [
  {
    id: id(),
    title: 'input for adding new todo',
    isDone: true,
  },
  {
    id: id(),
    title: 'rows with todo',
    isDone: false,
  },
  {
    id: id(),
    title: 'buttons for deleting todo',
    isDone: false,
  },
  {
    id: id(),
    title: 'add done/undone button',
    isDone: false,
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { list }

    this.handleListChange = this.handleListChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onCreateItem = this.onCreateItem.bind(this);
    this.onChangeExecutionStatus = this.onChangeExecutionStatus.bind(this);
  }

  handleListChange(updatedList) {
    this.setState({ list: updatedList });
  }

  onRemoveItem(id) {
    const list = this.state.list.filter(item => item.id !== id);
    this.handleListChange(list);
  }

  onCreateItem(value) {
    if (!value) {
      return false;
    }

    const list = this.state.list.slice();

    list.push({
      id: id(),
      title: value,
    });
    
    this.handleListChange(list);
  }

  onChangeExecutionStatus(id) {
    const list = this.state.list.slice();
    const itemIndex = list.findIndex(item => item.id === id);
    list[itemIndex].isDone = !list[itemIndex].isDone;
    this.handleListChange(list);
  }
  
  render() {
    const { list } = this.state;
    return (
      <div className="todo">
        <h1>TODOlist</h1>
        <CreateItem
          onCreate={this.onCreateItem}
        ></CreateItem>
        <List
          list={list}
          onChangeExecutionStatus={this.onChangeExecutionStatus}
          onRemove={this.onRemoveItem}
        ></List>
      </div>
    );
  }
}

export default App;
