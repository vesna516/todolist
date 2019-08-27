import React, { Component } from 'react';
import Item from '../Item/Item';

class List extends Component {
  constructor(props) {
    super(props);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onRemoveItem(id) {
    const list = this.props.list.filter(item => item.id !== id);
    this.props.updateList(list);
  }

  render() {
    const { list, updateList } = this.props;

    if (!list.length) {
      return (
        <div className="list-empty">TODOlist is empty</div>
      );
    }

    return (
      <div className="list">
        {list.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
              list={list}
              updateList={updateList}
              onRemoveItem={this.onRemoveItem}
            />
          )
        })}
      </div>
    );
  }
}
  
export default List;