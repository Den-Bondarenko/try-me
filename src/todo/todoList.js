import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './todoItem';

import './todoList.css';

function TodoList(props) {
    return(
        <ul>
            {props.todos.map((el, index) => {
                return <TodoItem id={index} todo={el}/>
            })}
        </ul>
    );
};

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired 
};

export default TodoList;