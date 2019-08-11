import React, { Component } from 'react';
import Button from '../Button/Button';

class CreateItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            value: '',
        }
    
        this.onChange = this.onChange.bind(this);
        this.onCreateItem = this.onCreateItem.bind(this);
    }
  
    onChange(event) {
        this.setState({ value: event.target.value });
    }
  
    onCreateItem() {
        if (!this.state.value) {
            return false;
        }

        const id = this.props.list[this.props.list.length - 1].id + 1;
    
        this.props.list.push({
            id: id,
            title: this.state.value,
        });
        
        this.props.onListChange(this.props.list);
    }
  
    render() {
        const { value } = this.state;
        return (
            <div className="create-item">
                <input
                    type="text"
                    className="input-text"
                    value={value}
                    onChange={this.onChange}
                />
                <Button
                    className="button button_primary"
                    onClick={this.onCreateItem}
                >
                    Create
                </Button>
            </div>
        );
    }
}
  
export default CreateItem;