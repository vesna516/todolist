import React, { Component } from 'react';
import Button from '../Button/Button';

function List(props) {    
  return (
    <div className="list">
      {props.list.map(item => {
        const itemClassName = item.isDone ? 'list-item list-item_done' : 'list-item';
        const buttonText = item.isDone ? 'Undone' : 'Done';
        const buttonClassName = item.isDone
          ? 'button_small button_outline-secondary'
          : 'button_small button_outline-success';
          
        return (
          <div
            key={item.id}
            className={itemClassName}
          >
            <div>{item.title}</div>
            <div>
              <Button
                className={buttonClassName}
                onClick={() => props.onChangeExecutionStatus(item.id)}
              >
                {buttonText}
              </Button>
              <Button
                className="button_small button_outline-danger"
                onClick={() => props.onRemove(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      )}
    </div>
  );
}
  
export default List;