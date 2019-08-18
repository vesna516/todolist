import React, { Component } from 'react';
import List from './List/List';
import NewItem from './NewItem/NewItem';

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
  },
  {
    id: id(),
    title: 'buttons for deleting todo',
  },
  {
    id: id(),
    title: 'add done/undone button',
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      list,
      newItem: '',
    }

    this.handleListChange = this.handleListChange.bind(this);
    this.onCreateChange = this.onCreateChange.bind(this);
    this.onCreateItem = this.onCreateItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onDoneItem = this.onDoneItem.bind(this);
  }

  handleListChange(updatedList) {
    this.setState({ list: updatedList });
  }

  onCreateChange(event) {
    this.setState({ newItem: event.target.value });
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

  onRemoveItem(id) {
    const list = this.state.list.filter(item => item.id !== id);
    this.handleListChange(list);
  }

  onChangeItem(event, id) {
    const list = this.state.list.slice();
    const itemIndex = list.findIndex(item => item.id === id);
    list[itemIndex].title = event.target.value;
    this.handleListChange(list);
  }

  onDoneItem(id) {
    const list = this.state.list.slice();
    const itemIndex = list.findIndex(item => item.id === id);
    list[itemIndex].isDone = !list[itemIndex].isDone;
    this.handleListChange(list);
  }

  render() {
    const { list, newItem } = this.state;
    return (
      <div className="todo">
        <h1>TODOlist</h1>
        <NewItem
          value={newItem}
          onChange={this.onCreateChange}
          onCreate={() => this.onCreateItem(newItem)}
        ></NewItem>
        <List
          list={list}
          onDone={this.onDoneItem}
          onRemove={this.onRemoveItem}
          onChange={this.onChangeItem}
        ></List>
      </div>
    );
  }
}

export default App;