import React, { Component } from 'react';
import Button from '../Button/Button';

class CreateItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = { value: '' }
    
        this.onChange = this.onChange.bind(this);
    }
  
    onChange(event) {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
  
    render() {
        const { onCreate } = this.props;
        const { value } = this.state;
        return (
            <div className="create-item">
                <input
                    type="text"
                    className="input-text"
                    value={value}
                    onChange={this.onChange}
                    ref={el => this.input = el}
                />
                <Button
                    className="button_primary"
                    onClick={() => onCreate(value)}
                >
                    Create
                </Button>
            </div>
        );
    }
}
  
export default CreateItem;