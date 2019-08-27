import React, { Component } from 'react';
import Button from '../Button/Button';
import RemoveIcon from '../../images/remove.svg';
import DoneIcon from '../../images/done.svg';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { focused: false };
    }

    onInputFocus() {
        this.setState({ focused: true });
    }

    onInputBlur() {
        this.setState({ focused: false });
    }
  
    findItemIndex(id) {
        const list = this.props.list.slice();
        return list.findIndex(item => item.id === id);
    }
  
    onChangeTitle(event, id) {
        const list = this.props.list.slice();
        const itemIndex = this.findItemIndex(id);
        list[itemIndex].title = event.target.value;
        this.props.updateList(list);
    }
  
    onDone(id) {
        const list = this.props.list.slice();
        const itemIndex = this.findItemIndex(id);
        list[itemIndex].isDone = !list[itemIndex].isDone;
        this.props.updateList(list);
    }
  
    render() {
        const { item, onRemoveItem } = this.props;
        const { focused } = this.state;
        let itemClassName = item.isDone ? 'item item_done' : 'item';
        itemClassName = focused ? itemClassName + ' item_active' : itemClassName;
        const button = item.isDone
            ? {
                className: 'button_icon button_outline-success',
                title: 'Undo',
            }
            : {
                className: 'button_icon button_outline-secondary item__execution-button',
                title: 'Done',
            };
            
        return (
            <div className={itemClassName}>
                <Button
                    className={button.className}
                    title={button.title}
                    onClick={() => this.onDone(item.id)}
                >
                    <DoneIcon className="button__icon" />
                </Button>
                <input
                    className="item__title"
                    value={item.title}
                    onFocus={() => this.onInputFocus()}
                    onBlur={() => this.onInputBlur()}
                    onChange={() => this.onChangeTitle(event, item.id)}
                />
                <div className="item__buttons">
                    <Button
                        className="button_outline-danger button_icon"
                        title="Remove"
                        onClick={() => onRemoveItem(item.id)}
                    >
                        <RemoveIcon className="button__icon"/>
                    </Button>
                </div>
            </div>
        );
    }
}
    
export default Item;