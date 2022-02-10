import React from 'react';
import propTypes from 'prop-types';

import "./todoItem.css";

function TodoItem({ todo, id }) {
    return (
        <li key={todo.index}>
            <span>
                <input type="checkbox" onChange={() => console.log(todo.index)} />
                <strong>{id + 1}</strong>
                {todo.title}
            </span>
            <button>&times;</button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    id: propTypes.number
};

export default TodoItem;