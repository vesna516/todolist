import React, { Component } from 'react';
import Button from '../Button/Button';

class List extends Component {
    render() {
        const { list, onRemoveItem } = this.props;
        return (
            <div className="list">
                {list.map(item => 
                    <div
                        key={item.id}
                        className="list__item"
                    >
                        <div>{item.title}</div>
                        <div>
                            <Button
                                className="button button_secondary"
                                onClick={() => onRemoveItem(item.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
  
export default List;