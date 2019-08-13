import React, { Component } from 'react';

function Button(props) {
    const className = `button ${props.className}`;
    return (
        <button
            type="button"
            className={className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
  
export default Button;