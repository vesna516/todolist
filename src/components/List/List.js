import React, { Component } from 'react';
import Button from '../Button/Button';
import RemoveIcon from '../../images/remove.svg';
import DoneIcon from '../../images/done.svg';

function List(props) {
  return (
    <div className="list">
      {props.list.map(item => {
        const itemClassName = item.isDone ? 'list-item list-item_done' : 'list-item';

        const button = item.isDone
        ? {
          className: 'button_icon button_outline-success',
          title: 'Undo',
        }
        : {
          className: 'button_icon button_outline-secondary list-item__execution-button',
          title: 'Done',
        }
          
        return (
          <div
            key={item.id}
            className={itemClassName}
          >
            <Button
              className={button.className}
              onClick={() => props.onDone(item.id)}
              title={button.title}
            >
              <DoneIcon className="button__icon" />
            </Button>
            <input
              className="list-item__title"
              value={item.title}
              onChange={() => props.onChange(event, item.id)}
            />
            <div className="list-item__buttons">
              <Button
                className="button_small button_outline-danger button_icon"
                onClick={() => props.onRemove(item.id)}
                title="Remove"
              >
                <RemoveIcon className="button__icon"/>
              </Button>
            </div>
          </div>
        )}
      )}
    </div>
  );
}
  
export default List;