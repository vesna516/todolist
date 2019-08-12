import React, { Component } from 'react';
import List from './List/List';
import CreateItem from './CreateItem/CreateItem';

const list = [
  {
    id: 1,
    title: 'input for adding new todo',
  },
  {
    id: 2,
    title: 'rows with todo',
  },
  {
    id: 3,
    title: 'buttons for deleting todo',
  },
  {
    id: 4,
    title: 'add done/undone button',
  },
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    }

    this.handleListChange = this.handleListChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  handleListChange(updatedList) {
    this.setState({ list: updatedList });
  }

  onRemoveItem(id) {
    const updatedList = this.state.list.filter(item => item.id !== id);
    this.handleListChange(updatedList);
  }
  
  render() {
    const { list } = this.state;
    return (
      <div className="todo">
        <h1>TODOlist</h1>
        <CreateItem
          list={list}
          onListChange={this.handleListChange}
        ></CreateItem>
        <List
          list={list}
          onRemoveItem={this.onRemoveItem}
        ></List>
      </div>
    );
  }
}

export default App;
