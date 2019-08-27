import React, { Component } from 'react';

function Button(props) {
    const { className, title, children, onClick } = props;
    const buttonClassName = `button ${className}`;
    return (
        <button
            type="button"
            className={buttonClassName}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
}
  
export default Button;