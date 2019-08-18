import React, { Component } from 'react';
import Button from '../Button/Button';

class NewItem extends Component {
    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
  
    render() {
        const { value, onCreate, onChange } = this.props;
        return (
            <div className="create-item">
                <input
                    type="text"
                    className="input-text"
                    value={value}
                    onChange={onChange}
                    ref={el => this.input = el}
                />
                <Button
                    className="button_primary"
                    onClick={onCreate}
                >
                    Create
                </Button>
            </div>
        );
    }
}
  
export default NewItem;