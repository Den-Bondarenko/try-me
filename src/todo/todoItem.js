import React from 'react';
import propTypes from 'prop-types';

import "./todoItem.css";

function TodoItem({ todo, id }) {
    return (
        <li key={todo.index}>
            <span>
                <input type="checkbox" />
                <strong>{id + 1}</strong>
                {todo.title}
                <button>&times;</button>
            </span>
            
        </li>
    );
};

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    id: propTypes.number
};

export default TodoItem;