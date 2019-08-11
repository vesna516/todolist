import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { className = '', onClick, children } = this.props;
        return (
            <button
                type="button"
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
}
  
export default Button;