import React, { Component } from 'react';
import Button from '../Button/Button';

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemTitle: '' };

        this.updateNewItemTitle = this.updateNewItemTitle.bind(this);
        this.onCreateItem = this.onCreateItem.bind(this);
        this.onPressEnter = this.onPressEnter.bind(this);
    }

    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }

    updateNewItemTitle(event) {
      this.setState({ newItemTitle: event.target.value });
    }

    onCreateItem() {
        const newItemTitle = this.state.newItemTitle;

        if (!newItemTitle || !/\S/.test(newItemTitle)) {
            return false;
        }

        const list = this.props.list;
        list.push({
            id: list.length ? list[list.length - 1].id + 1 : 1,
            title: newItemTitle,
        });

        this.props.updateList(list);
        this.setState({ newItemTitle: ''});
        this.input.focus();
    }

    onPressEnter(event) {
        if (event.key === 'Enter') {
            this.onCreateItem();
        }
    }
  
    render() {
        const { newItemTitle } = this.state;
        return (
            <div className="create-item">
                <input
                    type="text"
                    className="input-text"
                    value={newItemTitle}
                    ref={el => this.input = el}
                    onChange={this.updateNewItemTitle}
                    onKeyPress={this.onPressEnter}
                />
                <Button
                    className="button_primary"
                    onClick={this.onCreateItem}
                >
                    Create
                </Button>
            </div>
        );
    }
}
  
export default CreateItem;